<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Show libro</title>
</head>

<body>
    <p>El ejemplar <b>{{ $ejemplar->codigo }}</b> del libro {{ $ejemplar->libro->titulo }} ha sido escrito por
        <b>{{ $ejemplar->libro }}.</b></p>

</body>

</html>
