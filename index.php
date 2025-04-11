<?php
// public/index.php
// Main entry point for your DigitalOcean App Platform PHP app

// Get country code from Cloudflare header (if using Cloudflare)
$country = $_SERVER['HTTP_CF_IPCOUNTRY'] ?? 'XX'; // 'XX' = unknown or fallback

// Redirect based on country
switch ($country) {
    case 'US':
        header('Location: /us');
        exit;
    case 'CA':
        header('Location: /ca');
        exit;
    default:
        // Show main landing page or global version
        echo "<h1>Welcome!</h1><p>Your country code is: $country</p>";
        break;
}
?>
