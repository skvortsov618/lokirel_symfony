<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{
    /**
     * @Route("/blog", name="app_blog")
     * @return JsonResponse
     */
    public function getposts(): Response
    {
        $posts=[
            [
                'id'=>1,
                'category'=>'base',
                'tags'=>['flower'],
                'title'=>'ada1',
                'text'=>'some text1...',
                'image'=>'image1'
            ]
        ];
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "aplication/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($posts)));
        return $response;
    }
}
