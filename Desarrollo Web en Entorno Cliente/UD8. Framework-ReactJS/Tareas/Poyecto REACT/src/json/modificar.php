<?php
header("Access-Control-Allow-Origin: *");
$input = $_POST['id_producto'];
$tipo = $_POST['tipo'];

$carritoJson = file_get_contents('cart.json');
$cesta = json_decode($carritoJson, true);
if($tipo == '+'){
    foreach ($cesta['cart'] as &$articulo) {
        if ($articulo['nombre'] == $input) {
            $articulo['cantidad'] += 1;
        }
}
}elseif($tipo == '-'){
    foreach ($cesta['cart'] as &$articulo) {
        if ($articulo['nombre'] == $input) {
            $articulo['cantidad'] -= 1;
            if ($articulo['cantidad'] == 0){
                $clave = array_search($articulo, $cesta['cart']);
                unset($cesta['cart'][$clave]);
                $cesta['cart'] = array_values($cesta['cart']);
            }
        }
}
    
}elseif($tipo == 'todos'){
        $cesta['cart'] = array();
}


file_put_contents('cart.json', json_encode($cesta));

echo json_encode(['message' => 'Objeto añadido al carrito']);
?>
