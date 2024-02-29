<x-app-layout>

<form class="max-w-xl mx-auto mt-3 w-1/2" action="{{ route('alumnos.store') }}" method="post">
    @csrf
    <div class="mb-5 mt">
      <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Introduce tu nombre</label>
      <input type="text" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required />
    </div>
    <button type="submit" class="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar nuevo alumno</button>
  </form>

</x-app-layout>
