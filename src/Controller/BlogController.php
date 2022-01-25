<?php

namespace App\Controller;

use App\Entity\Image;
use App\Entity\PostBlock;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Post;

class BlogController extends AbstractController
{

    /**
     * @Route("/blog", name="app_blog")
     * @return JsonResponse
     */
    public function getPosts(Request $request, ManagerRegistry $registry): Response
    {
        $registry = $registry->getManager();

        $data=json_decode($request->getContent(), true);

//        $tags = $data['tags'];
//        $categories = $data['categories'];
//        $page = $data['page'];
//        $perPage = $data['perPage'];
//          $search = $data['search'];

        $posts = $registry->getRepository(Post::class)->findByParams();

        $results = [];
        foreach ($posts as $post) {
            $results[] = $post->getFullValues();
        }

        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($results)));
        return $response;
    }

    /**
     * @Route("/blog/post", name="app_get_post")
     * @return JsonResponse
     */
    public function getPost(Request $request, ManagerRegistry $registry): Response
    {
        $registry = $registry->getManager();
        $data=json_decode($request->getContent(), true);

        $slug = $data['slug'] ?? '';

        $post = $registry->getRepository(Post::class)->findOneBy(["slug"=>$slug]);

        $result = $post->getFullValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/blog/create", name="app_create_post")
     * @return JsonResponse
     */
    public function addPost(Request $request, ManagerRegistry $registry): Response
    {
        $registry = $registry->getManager();
        $data=json_decode($request->getContent(), true);

        $title=$data['title'];
        $cover=$data['cover'];
        $slug=$data['slug'];
        $hidden=false;
        $_blocks=$data['blocks'];

        $_images = [];
        foreach ($_blocks as $_block) {
            foreach ($_block['images'] as $_blockImage) {
                $_images[] = $_blockImage;
            }
        }
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

        $post = Post::newWithParams($title,$slug,$hidden,$cover,$_blocks);
        $registry->persist($post);
        $registry->flush();


        $result = $post->getFullValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/blog/delete", name="app_delete_post")
     * @return JsonResponse
     */
    public function deletePost(Request $request, ManagerRegistry $registry): Response
    {
        $registry = $registry->getManager();
        $data=json_decode($request->getContent(), true);

        $post_id = $data['post_id'];

        $post = $registry->getRepository(Post::class)->findOneBy(["id"=>$post_id]);

        $registry->remove($post);
        $registry->flush();

        $result = "post deleted";
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/blog/update", name="app_update_post")
     * @return JsonResponse
     */
    public function updatePost(Request $request, ManagerRegistry $registry): Response
    {
        $registry = $registry->getManager();
        $data=json_decode($request->getContent(), true);

        $title=$data['title'];
        $cover=$data['cover'];
        $slug=$data['slug'];
        $hidden=false;
        $_blocks=$data['blocks'];

        $_images = [];
        foreach ($_blocks as $_block) {
            foreach ($_block['images'] as $_blockImage) {
                $_images[] = $_blockImage;
            }
        }
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



        $result = "post deleted";
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($result)));
        return $response;
    }
}
