<?php

header("Access-Control-Allow-Origin: *");

$data = [];
$files = glob(__DIR__ . "/states/*.json");
foreach($files as $jsonFile) {
    try {
      $data[] = json_decode( file_get_contents($jsonFile), true );
    } catch (\Exception $e) {

    }
}

usort($data, function($a, $b) {
  return $a['timestamp'] > $b['timestamp'] ? -1 : 1;
});

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);