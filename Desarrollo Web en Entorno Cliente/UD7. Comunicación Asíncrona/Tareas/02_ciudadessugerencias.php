<?php
$ciudadesJson = file_get_contents('02_buscar_ciudades.json');
$ciudades = json_decode($ciudadesJson, true);

$input = $_GET['input'];
$sugerencias = [];

foreach ($ciudades as $ciudad) {
    if (strpos(strtolower($ciudad), strtolower($input)) === 0) {
        $sugerencias[] = $ciudad;
    }
}

echo json_encode($sugerencias);
