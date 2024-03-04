<?php

namespace App\Http\Controllers;

use App\Models\Desarrolladora;
use App\Models\Videojuego;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VideojuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $order = $request->query('order', 'desarrolladoras.nombre'); // Crea una query para ordenar por el nombre de la desarrolladora
        $order_dir = $request->query('order_dir', 'asc'); // Crea una query para ordenar de forma ascendente
        // Realiza la consulta, con la tabla Videojuego, juntándola con Desarrolladora y esta a su vez con distribuidora
        $videojuegos = Auth::user()->videojuegos()->with(['desarrolladora', 'desarrolladora.distribuidora'])
        /*
        Auth::user()->videojuegos()->with(['desarrolladora', 'desarrolladora.distribuidora']) Esto lo que hace es que segun el usuario loguedo
        con Auth::user() sacas el objeto de dicho usuario, le pasas el metodo videojuegos() que hemos creado para la relacion (está en el modelo User)
        with(['desarrolladora', 'desarrolladora.distribuidora']) carga las relaciones desarrolladora y distribuidora de la relación desarrolladora del modelo principal.
        */

        // Hacemos un join de la tabla "desarrolladoras" a través del id en videojuegos
        ->join('desarrolladoras', 'videojuegos.desarrolladora_id', '=', 'desarrolladoras.id')
        ->join('distribuidoras', 'desarrolladoras.distribuidora_id', '=', 'distribuidoras.id')
        ->orderBy($order, $order_dir) // Ordena por los parametros pasados
        ->orderBy('distribuidoras.nombre', $order_dir) // Ordena también por el nombre de la distribuidora
        ->orderBy('videojuegos.titulo') // Ordena por título (si es necesario)
        ->get(); // Recoge y devuelve la consulta

        /*
        Si queremos hacer una paginacion, prescindimos del get y usamos ->paginate(n)
        en la paginacion hay que usar un {{ $resultados->links() }} para realizar la paginacion
        en este caso $resultados es $videojuegos
        */
        return view('videojuegos.index', [
            'videojuegos'=>$videojuegos,
            'order'=>$order,
            'order_dir'=>$order_dir,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("videojuegos.create", ["desarrolladoras" => Desarrolladora::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Videojuego::create([
            "titulo" => $request->titulo,
            "anyo" => $request->anyo,
            "desarrolladora_id" => $request->desarrolladora_id, //PILLA EL ID PERO NO SE LO AÑADE  | ERA EL FILLABLE
        ]);
        /*
        $videojuego = New Videojuego();
        $videojuego->titulo = $request->titulo;
        $videojuego->anyo = $request->anyo;
        $videojuego->desarrolladora_id = $request->desarrolladora_id;
        $videojuego->save();*/
        return redirect()->route("videojuegos.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Videojuego $videojuego)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Videojuego $videojuego)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Videojuego $videojuego)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Videojuego $videojuego)
    {
        $videojuego->users()->detach();
        $videojuego->delete();

        return redirect()->route("videojuegos.index");
    }

    public function poseo()
    {
        return view("videojuegos.poseo", ["videojuegos"=>Videojuego::all()]);
    }

    public function poseo_funcion(Request $request)
    {
        $videojuego = Videojuego::find($request->videojuego_id);
        $user = auth()->user();

        if ($request->funcionalidad === "Lo tengo")
        {
            $videojuego->users()->attach($user->id);
        }else{
            $videojuego->users()->detach($user->id);
        }
        return redirect()->route("videojuegos.index");
    }
}
