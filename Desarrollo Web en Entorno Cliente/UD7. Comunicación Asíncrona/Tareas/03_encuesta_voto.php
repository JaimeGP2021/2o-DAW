<?php
$equipostxt = fopen('03_resultados.txt', 'r');
$primeralinea = fgets($equipostxt);
$equiposarray = explode('||', $primeralinea);
$equiposarray[$_GET['input']] += 1;
$primeralinea = implode('||', $equiposarray);

echo $primeralinea;

$nuevoarchivo = fopen('03_resultados.txt', 'w');
fwrite($nuevoarchivo, $primeralinea);
