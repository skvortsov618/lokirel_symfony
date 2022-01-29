<?php


namespace App\EventListener;


use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\Security\Http\Event\LogoutEvent;

class LogoutListener {
    public function onSymfonyComponentSecurityHttpEventLogoutEvent(LogoutEvent $event) {
        $event->getResponse()->headers->clearCookie('lokirel_auth');
    }
}