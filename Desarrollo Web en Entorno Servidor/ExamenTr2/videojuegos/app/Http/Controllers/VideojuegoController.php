<?php

namespace App\Http\Controllers;

use App\Models\Desarrolladora;
use App\Models\Videojuego;
use Illuminate\Http\Request;

class VideojuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuario = auth()->user();
        $videojuegos = $usuario->videojuegos;
        return view("videojuegos.index", ["videojuegos"=>$videojuegos]);
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
        if ($request->funcionalidad === "Lo tengo")
        {
            $request->videojuego_id->
        }else{

        }
    }
}
