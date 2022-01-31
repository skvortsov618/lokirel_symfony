<?php

namespace App\Controller;

use App\Entity\Image;
use App\Helpers\MiscHelper;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Validator\Constraints\Json;

class ImageController extends AbstractController
{
    /**
     * @Route("/images", name="app_images")
     * @return JsonResponse
     */
    public function getimages(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $ids = isset($data['ids']) && is_array($data['ids']) ? $data['ids'] : [];
        // validation
        for ($i=0; $i<count($ids); $i++) {
            if (!is_numeric($ids[$i])) {
                unset($ids[$i]);
            }
        }
        $ids = array_values($ids);
        // query
        $manager = $registry->getManager();
        if ($ids) {
            $images = $manager->getRepository(Image::class)->findByIds($ids);
        } else {
            $images = $manager->getRepository(Image::class)->findAll();
        }
        if (!$images) {
            $response = new JsonResponse();
            $response->setStatusCode(200);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'no images found'])));
            return $response;
        }
        // output
        $results = [];
        foreach ($images as $image) {
            $results[] = $image->getValues();
        }
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($results)));
        return $response;
    }

    /**
     * @Route("/admin/images/image", name="app_images_image")
     * @return JsonResponse
     */
    public function getimage(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data = json_decode($request->getContent(), true);
        $id = isset($data['id']) && is_numeric($data['id']) ? $data['id'] : 0;
        // validate
        if (!$id) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(["error"=>"invalid id"])));
            return $response;
        }
        // query
        $manager = $registry->getManager();
        $image = $manager->getRepository(Image::class)->findOneBy(['id'=>$id]);
        // output
        $result = $image->getValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/images/create", name="app_images_create")
     * @return JsonResponse
     */
    public function createImage(Request $request, ManagerRegistry $registry, SluggerInterface $slugger, KernelInterface $appKernel): Response
    {
        // vars
        $file = $request->files->get("newImage");
        $extension = $file->guessExtension();
        // validate file
        $errors=[];
        if (!$file->isValid()) $errors[] = 'upload error';
        if ($file->getSize() > 5000000) $errors[] = "file too big";
        if ($extension != 'jpg') $errors[] = "unknown extension";
        if ($errors) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode($errors)));
            return $response;
        }
        // paths
        $targetDirectory = '/uploads/images';
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$extension;
        // file
        try {
            $file->move($appKernel->getProjectDir().'/public'.$targetDirectory, $fileName);
        } catch (FileException $e) {
            var_dump($e);
        }
        // query
        $image = new Image();
        $image->setLink($targetDirectory.'/'.$fileName);
        $manager=$registry->getManager();
        $manager->persist($image);
        $manager->flush();
        // output
        $result = [
            'result'=>'success',
            'id'=>$image->getId()
        ];
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/images/update", name="app_images_update")
     * @return JsonResponse
     */
    public function updateImage(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data = json_decode($request->getContent(), true);
        $id = isset($data['id']) && is_numeric($data['id']) ? $data['id'] : 0;
        $alt_text = isset($data['alt_text']) ? MiscHelper::esc_and_cut($data['alt_text'], 150) : '';
        // validate
        if (!$id) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'invalid id'])));
            return $response;
        }
        // query
        $manager = $registry->getManager();
        $image = $manager->getRepository(Image::class)->findOneBy(['id'=>$id]);
        // validate image
        if (!$image) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'image not found'])));
            return $response;
        }
        // update
        if ($alt_text) $image->setAltText($alt_text);
        // query
        $manager->persist($image);
        $manager->flush();
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode(['result'=>'success'])));
        return $response;
    }

    /**
     * @Route("/admin/images/delete", name="app_images_delete")
     * @return JsonResponse
     */
    public function deleteImage(Request $request, ManagerRegistry $registry, KernelInterface $appKernel): Response
    {
        // vars
        $data = json_decode($request->getContent(), true);
        $id = isset($data['id']) && is_numeric($data['id']) ? $data['id'] : 0;
        $alt_text = isset($data['alt_text']) ? MiscHelper::esc_and_cut($data['alt_text'], 150) : '';
        // validate
        if (!$id) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'invalid id'])));
            return $response;
        }
        // query
        $manager = $registry->getManager();
        $image = $manager->getRepository(Image::class)->findOneBy(['id'=>$id]);
        // validate image
        if (!$image) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'image not found'])));
            return $response;
        }
        // file
        $filesystem = new Filesystem();
        $fileFullpath = $appKernel->getProjectDir().'/public/'.$image->getLink();
        if ($filesystem->exists($fileFullpath)) {
            try {
                $filesystem->remove($fileFullpath);
            } catch (IOExceptionInterface $e) {
                $response = new JsonResponse();
                $response->setStatusCode(500);
                $response->headers->set("Content-Type", "application/json");
                $response->setContent((json_encode(['error'=>'file was not deleted'])));
                return $response;
            }
        } else {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'file not found'])));
            return $response;
        }
        // delete image
        $manager->remove($image);
        $manager->flush();
        // output
        $response = new JsonResponse();
        $response->setStatusCode(500);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode(['result'=>'success'])));
        return $response;
    }
}
