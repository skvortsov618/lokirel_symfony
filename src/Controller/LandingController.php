<?php


namespace App\Controller;

use App\Entity\ContentPair;
use App\Entity\User;
use App\Entity\Feedback;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use App\Helpers\MiscHelper;

class LandingController extends AbstractController
{
    /**
     * @Route("/feedback", name="app_feedback", methods={"POST"})
     * @return JsonResponse
     */
    public function feedback(Request $request, ValidatorInterface $validator, MailerInterface $mailer) {
        // vars
        $data=json_decode($request->getContent(), true);
        $fname=isset($data['fname']) ? MiscHelper::esc_and_cut($data['fname'], 50) : '';
        $femail=isset($data['fname']) ? MiscHelper::esc_and_cut($data['femail'], 100) : '';
        $ftel=isset($data['fname']) ? MiscHelper::esc_and_cut($data['ftel'], 50) : 0;
        $ftext=isset($data['fname']) ? MiscHelper::esc_and_cut($data['ftext'], 250) : '';
        $fmailing = isset($data['fmailing']) && htmlentities( $data["fmailing"], ENT_QUOTES, "UTF-8" ) == "1" ? true : false;
        // build feedback
        $feedback = new Feedback();
        $feedback->setCallname($fname);
        $feedback->setEmail($femail);
        $feedback->setPhone($ftel);
        $feedback->setText($ftext);
        $feedback->setMailing($fmailing);
        $feedback->setSource("lokirel.ru main page");
        $feedback->setTheme("lokirel.ru Форма обратной связи");
        $feedback->setSendtime(new \DateTimeImmutable("now", new \DateTimeZone("+0300")));
        // validate
        $errors = $validator->validate($feedback);
        if (count($errors) > 0 ) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode("invalid data")));
            return $response;
        }
        // query
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($feedback);
        $entityManager->flush();
        // email
        $email=(new EMail())
            ->from('green@lokirel.ru')
//            ->to('mredcyan@gmail.com')
            ->to('4952201992@mail.ru')
            ->addTo('mredcyan@gmail.com')
            ->subject("lokirel.ru landing feedback")
            ->html("<p>| ИМЯ: ".$fname." | ПОЧТА: ".$femail." | ТЕЛЕФОН: ".$ftel." | СООБЩЕНИЕ: ".$ftext." |</p>");
        $mailer->send($email);
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode($fname)));
        return $response;
    }

    /**
     * @Route("/register", name="app_register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher)
    {
        // vars
        $data=json_decode($request->getContent(), true);
        $email = isset($data['email']) ? MiscHelper::esc_and_cut($data['email'], 100) : '';
        $plainPassword = isset($data['password']) ? MiscHelper::esc_and_cut($data['password'], 20) : '';
        // validate
        if (!$email || !$plainPassword) {
            $response = new JsonResponse();
            $response->setStatusCode(500);
            $response->headers->set("Content-Type", "application/json");
            $response->setContent((json_encode("invalid data")));
            return $response;
        }
        // build user
        $user = new User();
        $user->setEmail($email);
        $user->setPlainPassword($plainPassword);
        $user->setPassword($userPasswordHasher->hashPassword($user, $plainPassword));
        $user->setRoles(['ROLE_ADMIN']);
        // query
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();
        // output
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $response->headers->set("Content-Type", "application/json");
        $response->setContent((json_encode("success")));
        return $response;
    }

    /**
     * @Route("/{reactRouting}", name="app_homepage", defaults={"reactRouting": null}, requirements={"reactRouting"=".+"})
     * @return Response
     */
    public function landing(ManagerRegistry $registry) {
        $manager=$registry->getManager();
        $pairs = $manager->getRepository(ContentPair::class)->findBy(['pack'=>'landing']);
        return $this->render('landing.html.twig', [
            'random_value' => 3
        ]);
    }


}