<?php
// Get user's IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Get location data from ipapi
$geoData = @file_get_contents("https://ipapi.co/{$ip}/json/");
$location = json_decode($geoData);

// Default redirect URL
$defaultRedirect = "https://shopping.net/";

// Check for country and redirect accordingly
if ($location && isset($location->country)) {
    switch ($location->country) {
        case 'US':
            header("Location: https://facebook.com/us");
            exit;
        case 'DE':
            header("Location: https://zara.com/de");
            exit;
        case 'IN':
            header("Location: https://hnm.com/in");
            exit;
        default:
            header("Location: $defaultRedirect");
            exit;
    }
} else {
    // If geolocation fails
    header("Location: $defaultRedirect");
    exit;
}
?>
