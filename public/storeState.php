<?php

header("Access-Control-Allow-Origin: *");

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, TRUE);
//$data = json_decode( $_POST['game_state'] ?? "" );

var_dump($data);

if($data && isset($data['game_state']['gameId'])) {

  $gameId = $data['game_state']['gameId'];
  if($gameId) {
    $data['timestamp'] = date('Y-m-d H:i:s');
    file_put_contents(__DIR__ . "/states/" . $gameId . ".json", json_encode($data));
  }

}