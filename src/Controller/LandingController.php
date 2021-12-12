<?php


namespace App\Controller;

use App\Entity\Feedback;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class LandingController extends AbstractController
{
    /**
     * @Route("/feedback", name="app_feedback")
     * @return JsonResponse
     */
    public function feedback(Request $request, ValidatorInterface $validator, MailerInterface $mailer) {

        $data=json_decode($request->getContent(), true);

        $fname=htmlentities(substr(trim($data["fname"]), 0, 50), ENT_QUOTES, "UTF-8");
        $femail=htmlentities(substr(trim($data["femail"]), 0, 100), ENT_QUOTES, "UTF-8");
        $ftel=htmlentities(substr(trim($data["ftel"]), 0, 50), ENT_QUOTES, "UTF-8");
        $ftext=htmlentities(substr(trim($data["ftext"]), 0, 250), ENT_QUOTES, "UTF-8");
        $fmailing = htmlentities( $data["fmailing"], ENT_QUOTES, "UTF-8" ) == "1" ? true : false;

        $feedback = new Feedback();
        $feedback->setCallname($fname);
        $feedback->setEmail($femail);
        $feedback->setPhone($ftel);
        $feedback->setText($ftext);
        $feedback->setMailing($fmailing);
        $feedback->setSource("lokirel.ru main page");
        $feedback->setTheme("lokirel.ru Форма обратной связи");
        $feedback->setSendtime(new \DateTimeImmutable("now", new \DateTimeZone("+0300")));

        $errors = $validator->validate($feedback);
        if (count($errors) > 0 ) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "aplication/json");
            $response->setContent((json_encode($fmailing)));
            return $response;
        }

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($feedback);
        $entityManager->flush();

        $email=(new EMail())
            ->from('green@lokirel.ru')
            ->to('4952201992@mail.ru')
            ->subject("Lokirel.ru форма обратной связи на главной странице")
            ->text("| ИМЯ: ".$fname." | ПОЧТА: ".$femail." | ТЕЛЕФОН: ".$ftel." | СООБЩЕНИЕ: ".$ftext." |");
        $mailer->send($email);

        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "aplication/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($fname)));
        return $response;
    }

    /**
     * @Route("/{reactRouting}", name="app_homepage", defaults={"reactRouting": null} )
     * @return Response
     */
    public function landing() {
        dump($this->getDoctrine()->getManager());
        return $this->render('landing.html.twig', [
            'random_value' => 3
        ]);
    }
}