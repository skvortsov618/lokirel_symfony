<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\ContentPair;
use App\Entity\Image;
use App\Entity\PostBlock;
use App\Entity\Tag;
use App\Helpers\MiscHelper;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Post;

class BlogController extends AbstractController
{
    /**
     * @Route("/blog", name="app_blog", methods={"POST"})
     * @return JsonResponse
     */
    public function getBlogPage(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $perPage = isset($data['perPage']) && is_numeric($data['perPage']) ? $data['perPage'] : 0;
        // query
        $manager = $registry->getManager();
        // get posts
        $posts = $manager->getRepository(Post::class)->findByParams([
            'page'=>1,
            'perPage'=>$perPage,
        ]);
        // get tags
        $tags = $manager->getRepository(Tag::class)->findAll();
        // get categories
        $categories = $manager->getRepository(Category::class)->findAll();
        // get pairs
        $content = $manager->getRepository(ContentPair::class)->findBy(['pack'=>'blog']);
        // output
        $results = [];
        foreach ($posts as $post) {
            $results['posts'][] = $post->getFullValues();
        }
        foreach ($tags as $tag) {
            $results['tags'][] = $tag->getFullValues();
        }
        foreach ($categories as $category) {
            $results['categories'][] = $category->getFullValues();
        }
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($results)));
        return $response;
    }

    /**
     * @Route("/blog/posts", name="app_blog_posts", methods={"POST"})
     * @return JsonResponse
     */
    public function getPosts(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $tags = isset($data['tags']) && is_array($data['categories']) ? $data['tags'] : [];
        $categories = isset($data['categories']) && is_array($data['categories']) ? $data['categories'] : [];
        $page = isset($data['page']) && is_numeric($data['page']) ? $data['page'] : 0;
        $perPage = isset($data['perPage']) && is_numeric($data['perPage']) ? $data['perPage'] : 0;
        $search = isset($data['search']) ? MiscHelper::esc_and_cut($data['search'], 30) : '';
        // validate arrays
        $errors = [];
        for ($i = 0; $i < count($tags); $i++) {
            $tags[$i] = MiscHelper::esc_and_cut($tags[$i], 50);
            if (!$tags[$i]) unset($tags[$i]);
        }
        $tags = array_values($tags);
        for ($i = 0; $i < count($categories); $i++) {
            $categories[$i] = MiscHelper::esc_and_cut($categories[$i], 50);
            if (!$categories[$i]) unset($categories[$i]);
        }
        $categories = array_values($categories);
        if ($errors) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode($errors)));
            return $response;
        }
        // query
        $registry = $registry->getManager();
        $posts = $registry->getRepository(Post::class)->findByParams([
            'tags'=>$tags,
            'categories'=>$categories,
            'page'=>$page,
            'perPage'=>$perPage,
            'search'=>$search
        ]);
        $results = [];
        foreach ($posts as $post) {
            $results[] = $post->getFullValues();
            $j = count($results);
            for ($i=0; $i < count($results[$j]['body']); $i++) {
                $results[$j]['body'][$i]['text'] = html_entity_decode($results[$j]['body'][$i]['text'], ENT_QUOTES, "UTF-8");
            }
        }
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($results)));
        return $response;
    }

    /**
     * @Route("/blog/post", name="app_get_post", methods={"POST"})
     * @return JsonResponse
     */
    public function getPost(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $slug = isset($data['slug']) ? MiscHelper::esc_and_cut($data['slug'], 250) : '';
        $id = isset($data['post_id']) && is_numeric($data['post_id']) ? $data['post_id'] : 0;
        // validate
        if (!$slug && !$id) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode("invalid data")));
            return $response;
        }
        // query
        $registry = $registry->getManager();
        if ($id) {
            $post = $registry->getRepository(Post::class)->findOneBy(["id"=>$id]);
        } else {
            $post = $registry->getRepository(Post::class)->findOneBy(["slug"=>$slug]);
        }
        $result = $post->getFullValues();
        for ($i=0; $i < count($result['body']); $i++) {
            $result['body'][$i]['text'] = html_entity_decode($result['body'][$i]['text'], ENT_QUOTES, "UTF-8");
        }
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/blog/create", name="app_create_post", methods={"POST"})
     * @IsGranted("ROLE_ADMIN")
     * @return JsonResponse
     */
    public function addPost(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $title=isset($data['title']) ? MiscHelper::esc_and_cut($data['title'], 250) : '';
        $cover=isset($data['cover']) ? MiscHelper::esc_and_cut($data['cover'], 250) : '';
        $slug=isset($data['slug']) ? MiscHelper::esc_and_cut($data['slug'], 250) : '';
        $hidden=isset($data['hidden']) && htmlentities( $data["hidden"], ENT_QUOTES, "UTF-8" ) == "1" ? true : false;
        $_blocks=isset($data['blocks']) && is_array($data['blocks']) ? $data['blocks'] : [];
        $_images = [];
        $images = '';
        // validate
        $errors = [];
        if (!$title) $errors[] = 'invalid title';
        if (!$slug) $errors[] = 'invalid slug';
        if (!$_blocks) $errors[] = 'no body';
        foreach($_blocks as $i=>$_block) {
            $_blocks[$i]['text'] = isset($_block['text']) ? MiscHelper::esc_and_cut($_block['text'], 4000) : '';
            $_blocks[$i]['type'] = isset($_block['type']) ? MiscHelper::esc_and_cut($_block['type'], 50) : '';
            $_blocks[$i]['images'] = isset($_block['images']) && is_array($_block['images']) ? $_block['images'] : '';
            foreach($_block['images'] as $j=>$_blockimage) {
                $_blocks[$i]['images'][$j] = isset($_blockImage) && is_numeric($_blockImage) ? $_blockImage : 0;
                if (!$_blockImage) unset($_blocks[$i]['images']['j']);
            }
            $_blocks[$i]['images'] = array_values($_blocks[$i]['images']);
        }
        if ($errors) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode($errors)));
            return $response;
        }
        // images
        foreach ($_blocks as $_block) {
            foreach ($_block['images'] as $_blockImage) {
                $_images[] = $_blockImage;
            }
        }
        $registry = $registry->getManager();
        // query images
        $cover = $registry->getRepository(Image::class)->findOneBy(['id'=>$cover]);
        $images = $registry->getRepository(Image::class)->findBy(['id'=>$_images]);
        foreach ($_blocks as $key=>$value) {
            foreach ($value['images'] as $key2=>$value2) {
                foreach ($images as $image) {
                    if ($image->getId() == $_blocks[$key][$key2]) {
                        $_blocks[$key][$key2] = $image;
                        break;
                    }
                }
            }
        }
        // query new post
        $post = Post::newWithParams($title,$slug,$hidden,$cover,$_blocks);
        $registry->persist($post);
        $registry->flush();
        // output
        $result = $post->getFullValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/blog/delete", name="app_delete_post", methods={"POST"})
     * @IsGranted("ROLE_ADMIN")
     * @return JsonResponse
     */
    public function deletePost(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $post_id = isset($data['post_id']) && is_numeric(data['post_id']) ? $data['post_id'] : 0;
        // validate
        if (!$post_id) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
            $response->setContent((json_encode("invalid data")));
            return $response;
        }
        // query
        $registry = $registry->getManager();
        $post = $registry->getRepository(Post::class)->findOneBy(["id"=>$post_id]);
        $registry->remove($post);
        $registry->flush();
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode(["post deleted"])));
        return $response;
    }

    /**
     * @Route("/admin/blog/update", name="app_update_post", methods={"POST"})
     * @IsGranted("ROLE_ADMIN")
     * @return JsonResponse
     */
    public function updatePost(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $post_id = isset($data['id']) && is_numeric($data['id']) ? $data['id'] : 0;
        $title=isset($data['title']) ? MiscHelper::esc_and_cut($data['title'], 250) : '';
        $cover=isset($data['cover']) ? MiscHelper::esc_and_cut($data['cover'], 250) : '';
        $slug=isset($data['slug']) ? MiscHelper::esc_and_cut($data['slug'], 250) : '';
        $hidden=isset($data['hidden']) && htmlentities( $data["hidden"], ENT_QUOTES, "UTF-8" ) == "1" ? true : false;
        $_blocks=isset($data['body']) && is_array($data['body']) ? $data['body'] : [];
        // validate
        $errors = [];
        if (!$post_id) $errors[] = "invalid post_id";
        foreach($_blocks as $i=>$_block) {
            $_blocks[$i]['id'] = isset($_block['id']) && is_numeric($_block['id']) ? $_block['id'] : 0;
            $_blocks[$i]['text'] = isset($_block['text']) ? MiscHelper::esc_and_cut($_block['text'], 4000) : '';
            $_blocks[$i]['type'] = isset($_block['type']) ? MiscHelper::esc_and_cut($_block['type'], 50) : '';
            $_blocks[$i]['priority'] = isset($_block['priority']) && is_numeric($_block['priority']) ? $_block['priority'] : 0;
            $_blocks[$i]['images'] = isset($_block['images']) && is_array($_block['images']) ? $_block['images'] : '';
            foreach($_block['images'] as $j=>$_blockimage) {
                $_blocks[$i]['images'][$j] = isset($_blockImage) && is_numeric($_blockImage) ? $_blockImage : 0;
                if (!$_blockImage) unset($_blocks[$i]['images']['j']);
            }
            $_blocks[$i]['images'] = array_values($_blocks[$i]['images']);
        }
        $_blocks = array_values($_blocks);
        if ($errors) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode($errors)));
            return $response;
        }
        // query post
        $registry = $registry->getManager();
        $post = $registry->getRepository(Post::class)->findOneBy(['id'=>$post_id]);
        if (!$post) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(["post not found"])));
            return $response;
        }
        // title
        if ($title) $post->setTitle($title);
        // cover
        if ($cover) {
            $cover = $registry->getRepository(Image::class)->findOneBy(['id'=>$cover]);
            $post->setCover($cover);
        }
        // slug
        if ($slug) $post->setSlug($slug);
        // hidden
        if (isset($hidden)) $post->setHidden($hidden);
        // blocks
        if ($_blocks) {
            // query images
            $_images = [];
            foreach ($_blocks as $_block) {
                foreach ($_block['images'] as $_blockImage) {
                    $_images[] = $_blockImage;
                }
            }
            $images = $registry->getRepository(Image::class)->findBy(['id'=>$_images]);
            foreach ($_blocks as $key=>$value) {
                foreach ($value['images'] as $key2=>$value2) {
                    foreach ($images as $image) {
                        if ($image->getId() == $_blocks[$key][$key2]) {
                            $_blocks[$key][$key2] = $image;
                            break;
                        }
                    }
                }
            }
            // manage used blocks
            foreach ($post->getBody() as $block) {
                $blockStillUsed = false;
                foreach ($_blocks as $_block) {
                    if ($block->getId() == $_block['id']) {
                        $blockStillUsed = true;
                        $block->setText($_block['text']);
                        $block->setType($_block['type']);
                        $block->setPriority($_block['priority']);
                        foreach ($block->getImages() as $blockImage) {
                            $block->removeImage($blockImage);
                        }
                        foreach ($_block['images'] as $_blockImage) {
                            $block->addImage($_blockImage);
                        }
                    }
                }
                if (!$blockStillUsed) {
                    $post->removeBody($block);
                    $registry->remove($block);
                }
            }
            // add new blocks
            foreach ($_blocks as $_block) {
                if ($_block['id'] == 0) {
                    $newBlock = PostBlock::newWithParams(
                        $post,
                        $_block['type'],
                        $_block['text'],
                        $_block['images'],
                        $_block['priority']
                    );
                    $post->addBody($newBlock);
                    $registry->persist($newBlock);
                }
            }
        }
        // query post update
        $post->setUpdated(40000);
        $registry->persist($post);
        $registry->flush();
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode(["post updated"])));
        return $response;
    }
}
