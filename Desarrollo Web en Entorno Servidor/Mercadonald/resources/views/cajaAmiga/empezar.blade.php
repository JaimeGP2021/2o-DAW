<x-app-layout>

    <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Bienvenido a la caja amiga</h1>
    <form class="flex items-center max-w-sm mx-auto" action="{{ route('cajaAmiga.escaneado') }}">
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Comenzar
            a comprar</button>
    </form>

</x-app-layout>
