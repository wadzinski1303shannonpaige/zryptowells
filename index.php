<?php
$ip = $_SERVER['REMOTE_ADDR']; // Get real IP
$geo = json_decode(@file_get_contents("https://ipapi.co/{$ip}/json/"));

if ($geo && isset($geo->country)) {
    switch ($geo->country) {
        case 'US':
            header("Location: https://google.com/us");
            exit;
        case 'IN':
            header("Location: /in");
            exit;
        default:
            header("Location: /global");
            exit;
    }
}
?>
