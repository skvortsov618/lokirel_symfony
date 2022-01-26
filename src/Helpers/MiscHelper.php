<?php


namespace App\Helpers;


class MiscHelper {

    public static function esc_and_cut($data, $length) {
        return htmlentities(substr(trim($data), 0, $length), ENT_QUOTES, "UTF-8");
    }

    public static function is_valid_password($data) {
        if ($data)
            return true;
    }
}