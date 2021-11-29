<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LandingController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="app_homepage", defaults={"reactRouting": null} )
     * @return Response
     */
    public function landing()
    {
        dump($this);
        return $this->render('landing.html.twig', [
            'random_value' => 3
        ]);
    }
}