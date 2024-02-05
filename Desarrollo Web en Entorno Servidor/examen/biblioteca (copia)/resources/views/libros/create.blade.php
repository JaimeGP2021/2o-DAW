<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create libro</title>
</head>

<body>
    <form action="{{ route('libros.store') }}" method="post">
        @csrf
        <label for="titulo">Título: </label>
        <input type="text" name="titulo" id="titulo">
        <br>
        <label for="autor">Autor: </label>
        <input type="text" name="autor" id="autor">
        <br>
        <button type="submit">Añadir libro</button>
    </form>
</body>

</html>
