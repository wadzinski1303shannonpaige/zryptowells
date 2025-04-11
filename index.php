<?php
// Get the user's IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Use ipapi to get country info
$apiUrl = "https://ipapi.co/{$ip}/json/";

// Get data from API using file_get_contents
$locationData = @file_get_contents($apiUrl);

// Convert JSON to PHP object
$location = json_decode($locationData);

// Check for country and redirect
if ($location && isset($location->country)) {
    if ($location->country === 'US') {
        header("Location: https://yourdomain.com/us");
        exit;
    } elseif ($location->country === 'CA') {
        header("Location: https://yourdomain.com/ca");
        exit;
    }
}

// No redirect for users from other countries
?>
