<?php
header('Content-Type: application/xml; charset=utf-8');

$supabaseUrl = 'https://jsliktxrbzwhxrtcyoxv.supabase.co';
$edgeFunctionUrl = $supabaseUrl . '/functions/v1/generate-sitemap';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $edgeFunctionUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($httpCode === 200 && $response) {
    echo $response;
} else {
    http_response_code(200);
    echo '<?xml version="1.0" encoding="UTF-8"?>';
    echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    echo '<url><loc>https://www.hillcopaint.com/</loc></url>';
    echo '</urlset>';
}
?>
