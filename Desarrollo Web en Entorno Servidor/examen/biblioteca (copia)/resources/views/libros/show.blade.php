<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Show libro</title>
</head>

<body>
    <p>El libro <b>{{ $libro->titulo }}</b> ha sido escrito por <b>{{ $libro->autor }}.</b></p>
    <table>
        <tr>
            <th>Ejemplar</th>
            <th>Estado</th>
            <th>Fecha_préstamo</th>
        </tr>
        @foreach ($libro->ejemplares as $ejemplar)
            <tr>
                <td><a href={{ route('ejemplares.show', $ejemplar) }}>{{ $ejemplar->codigo }}</a></td>

                <td>@php
                    if ($ejemplar->prestamo) {
                        echo 'Prestado';
                    } else {
                        echo 'Disponible';
                    }
                @endphp</td>
                <td>@php
                    if ($ejemplar->prestamo) {
                        echo $ejemplar->prestamo->fecha_hora;
                    }
                @endphp</td>
            </tr>
        @endforeach
    </table>
</body>

</html>
