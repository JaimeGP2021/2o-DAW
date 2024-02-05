<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit libro</title>
</head>

<body>
    <form action="{{ route('libros.update', $libro) }}" method="post">
        @csrf
        @method('PUT')
        <label for="titulo">Título: </label>
        <input type="text" name="titulo" id="titulo" value="{{ $libro->titulo }}">
        <br>
        <label for="autor">Autor: </label>
        <input type="text" name="autor" id="autor" value="{{ $libro->autor }}">
        <br>
        <button type="submit">Editar libro</button>
    </form>
</body>

</html>
