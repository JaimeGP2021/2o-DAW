<x-app-layout>

    @vite('resources/css/app.css')

    @if (session('error'))
        <div id="alert-border-2"
            class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
            role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div class="ms-3 text-sm font-medium">
                {{ session('error') }}
            </div>
            <button type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-border-2" aria-label="Close">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    @endif

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Título
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Año de salida
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Desarrolladora
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Distribuidora
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acción
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($videojuegos as $videojuego)
                    <tr
                        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <a href="{{ route('videojuegos.show', $videojuego) }}">{{ $videojuego->titulo }}</a>
                        </th>
                        <td class="px-6 py-4">
                            {{ $videojuego->anyo }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $videojuego->desarrolladora->nombre }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $videojuego->desarrolladora->distribuidora->nombre }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="{{ route('videojuegos.edit', $videojuego) }}"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a><br>
                            <form action="{{ route('videojuegos.destroy', $videojuego) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit">Borrar</button>
                            </form>

                        </td>
                    </tr>
                @endforeach
                <a href="{{ route('videojuegos.create') }}"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Crear</a>

            </tbody>
        </table>
    </div>

    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
</x-app-layout>
