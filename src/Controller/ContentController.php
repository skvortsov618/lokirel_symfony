<?php

namespace App\Controller;

use App\Entity\ContentPair;
use App\Helpers\MiscHelper;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ContentController extends AbstractController
{
    /**
     * @Route("/content", name="app_content")
     * @return Response
     */
    public function content(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $pack = isset($data['pack']) ? MiscHelper::esc_and_cut($data['pack'], 100) : '';
        // validation
        if (!$pack) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'invalid pack'])));
            return $response;
        }
        // query
        $manager=$registry->getManager();
        $content = $manager->getRepository(ContentPair::class)->findBy(['pack'=>$pack]);
        if (!$content) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent(json_encode(['error'=>'pair not found']));
            return $response;
        }
        // output
        $result = [];
        for ($i = 0; $i< count($content); $i++) {
            $result[$i] = $content[$i]->getFullValues();
            $result[$i]['content'] = html_entity_decode($result[$i]['content'], ENT_QUOTES, "UTF-8");
        }
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/content/pair", name="app_content_pair")
     * @return Response
     */
    public function contentpair(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $key = isset($data['placement_key']) ? MiscHelper::esc_and_cut($data['placement_key'], 100) : '';
        // validation
        if (!$key) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'invalid key'])));
            return $response;
        }
        // query
        $manager=$registry->getManager();
        $pair = $manager->getRepository(ContentPair::class)->findOneBy(['placement_key'=>$key]);
        if (!$pair) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent(json_encode(['error'=>'pair not found']));
            return $response;
        }
        // output
        $result = $pair->getFullValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/content/create", name="app_content_create")
     * @return Response
     */
    public function createpair(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $key = isset($data['placement_key']) ? MiscHelper::esc_and_cut($data['placement_key'], 100) : '';
        $content = isset($data['content']) ? MiscHelper::esc_and_cut($data['content'], 40000) : '';
        $pack = isset($data['pack']) ? MiscHelper::esc_and_cut($data['pack'], 100) : '';
        // validation
        $errors = [];
        if (!$key) $errors[] = 'invalid key';
        if ($errors) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent(json_encode($errors));
            return $response;
        }
        // query
        $pair = new ContentPair();
        $pair->setPlacementKey($key);
        $pair->setContent($content);
        $pair->setPack($pack);
        $manager=$registry->getManager();
        $manager->persist($pair);
        $manager->flush();
        // output
        $result = $pair->getFullValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/content/update", name="app_content_update")
     * @return Response
     */
    public function updatepair(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $key = isset($data['placement_key']) ? MiscHelper::esc_and_cut($data['placement_key'], 100) : '';
        if (isset($data['content'])) $content = MiscHelper::esc_and_cut($data['content'], 40000);
        if (isset($data['pack'])) $content = MiscHelper::esc_and_cut($data['pack'], 100);
        // validation
        $errors = [];
        if (!$key) $errors[] = 'invalid key';
        if (!isset($content) && !isset($pair)) $errors[] = 'nothing to update';
        if ($errors) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent(json_encode($errors));
            return $response;
        }
        // query
        $manager=$registry->getManager();
        $pair = $manager->getRepository(ContentPair::class)->findOneBy(['placement_key'=>$key]);
        if (!$pair) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'pair not found'])));
            return $response;
        }
        // update
        if (isset($content)) $pair->setContent($content);
        if (isset($pack)) $pair->setPack($pack);
        $manager->persist($pair);
        $manager->flush();
        // output
        $result = $pair->getFullValues();
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($result)));
        return $response;
    }

    /**
     * @Route("/admin/content/delete", name="app_content_delete")
     * @return Response
     */
    public function deletepair(Request $request, ManagerRegistry $registry): Response
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $id = isset($data['id']) && is_numeric($data[id])? $data['id'] : 0;
        $key = isset($data['placement_key']) ? MiscHelper::esc_and_cut($data['placement_key'], 100) : '';
        // validation
        if (!$id && !$key) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'invalid id'])));
            return $response;
        }
        // query
        $manager=$registry->getManager();
        if ($id) {
            $pair = $manager->getRepository(ContentPair::class)->findOneBy(['id'=>$id]);
        } else if ($key) {
            $pair = $manager->getRepository(ContentPair::class)->findOneBy(['placement_key'=>$key]);
        } else {
            $pair = null;
        }
        if (!$pair) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode(['error'=>'pair not found'])));
            return $response;
        }
        // delete
        $manager->remove($pair);
        $manager->flush();
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode(['result'=>'success'])));
        return $response;
    }

}
