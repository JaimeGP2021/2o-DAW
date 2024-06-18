<?php
header("Access-Control-Allow-Origin: *");

$cesta['cart'] = array();

file_put_contents('cart.json', json_encode($cesta));

echo json_encode(['message' => 'Artículos borrados']);
?>
