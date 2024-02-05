<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Libros</title>
</head>

<body>
    <table class="table-auto">
        <thead>
            <tr>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Editar</th>
                <th>Mostrar</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($libros as $libro)
                <tr>
                    <td>{{ $libro->titulo }}</td>
                    <td>{{ $libro->autor }}</td>
                    <td>
                        <form action="{{ route('libros.edit', $libro) }}" method="get">
                            @csrf
                            <button type="submit">Editar</button>
                        </form>
                    </td>
                    <td>
                        <button type="button"><a href={{ route('libros.show', $libro) }}>Mostrar</a></button>
                    </td>
                    <td>
                        <form action="{{ route('libros.destroy', $libro) }}" method="post">
                            @csrf
                            @method('Delete')
                            <button type="submit">Borrar</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <button><a href="{{ route('libros.create') }}">Insertar nuevo libro</a></button>

</body>

</html>
