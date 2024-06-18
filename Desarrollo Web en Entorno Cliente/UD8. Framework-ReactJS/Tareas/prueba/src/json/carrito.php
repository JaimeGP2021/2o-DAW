<?php
header("Access-Control-Allow-Origin: *");
$input = $_GET['id_producto'];
$inventario = file_get_contents('inventario.json');
$stock = json_decode($inventario, true);
$cesta = file_get_contents('cart.json');
$carrito = json_decode($cesta, true);

$nuevo = $stock['flores'][$input];

$existe = false;
foreach ($carrito['cart'] as &$producto) {
    if ($producto['nombre'] == $nuevo['nombre']) {
        $producto['cantidad'] += 1;
        $existe = true;
        break;
    }
}

if (!$existe) {
    $carrito['cart'][] = $nuevo;
}

file_put_contents('cart.json', json_encode($carrito));

echo json_encode(['message' => 'Objeto añadido al carrito']);
?>
