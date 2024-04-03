<x-app-layout>

    <form action="{{ route('videojuegos.poseo_funcion') }}" class="max-w-sm mx-auto" method="POST">
        @csrf

        <input type="submit" value="Lo tengo" name="funcionalidad">
        <select name="videojuego_id">
            @foreach ($videojuegos as $videojuego)
        <option value="{{ $videojuego->id }}"> {{$videojuego->titulo}}</option>
        @endforeach
        </select>
        <input type="submit" value="No lo tengo" name="funcionalidad">
    </form>

</x-app-layout>
