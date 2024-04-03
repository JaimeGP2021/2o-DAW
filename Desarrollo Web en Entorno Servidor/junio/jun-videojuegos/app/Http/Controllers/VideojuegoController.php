<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Videojuego;
use App\Models\Desarrolladora;
use Illuminate\Support\Facades\Auth;

class VideojuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('videojuegos.index', ['videojuegos'=>Auth::user()->videojuegos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('videojuegos.create', ["desarrolladoras" => Desarrolladora::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $videojuego = New Videojuego();
        $videojuego->titulo = $request->titulo;
        $videojuego->anyo = $request->anyo;
        $videojuego->desarrolladora_id = $request->desarrolladora_id;
        $videojuego->save();
        return redirect()->route("videojuegos.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Videojuego $videojuego)
    {
        return view('videojuegos.show');
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
        return redirect()->route("videojuegos.index");
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
