<?php

namespace App\Security;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\CustomCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\PassportInterface;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;

class LoginFormAuthenticator extends AbstractAuthenticator
{
    public function supports(Request $request): ?bool
    {
        return $request->getPathInfo() === "/login" && $request->isMethod("POST");
    }

    public function authenticate(Request $request): PassportInterface
    {
        $data=json_decode($request->getContent(), true);
        dump($data);
        $email = $data['lemail'];
        $password = $data['lpassword'];
        return new Passport(
            new UserBadge($email),
            new CustomCredentials(function($credentials, User $user) {
                return $credentials === "11";
            }, $password)
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $data = "success";
        $response->headers->set("Content-Type", "aplication/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($data)));
        return $response;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        $response = new JsonResponse();
        $response->setStatusCode(200);
        $data = "failure";
        $response->headers->set("Content-Type", "aplication/json");
//        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->setContent((json_encode($data)));
        return $response;
    }

//    public function start(Request $request, AuthenticationException $authException = null): Response
//    {
//        /*
//         * If you would like this class to control what happens when an anonymous user accesses a
//         * protected page (e.g. redirect to /login), uncomment this method and make this class
//         * implement Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface.
//         *
//         * For more details, see https://symfony.com/doc/current/security/experimental_authenticators.html#configuring-the-authentication-entry-point
//         */
//    }
}
