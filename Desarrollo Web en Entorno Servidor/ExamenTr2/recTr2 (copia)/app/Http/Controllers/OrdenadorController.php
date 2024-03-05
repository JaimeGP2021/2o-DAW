<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aula;
use App\Models\Ordenador;

class OrdenadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("ordenadores.index", ["ordenadores" => Ordenador::All()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("ordenadores.create", ["aulas" => Aula::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Ordenador::create([
            "marca" => $request->marca,
            "modelo" => $request->modelo,
            "aula_id" => $request->aula_id,
        ]);
        return redirect()->route('ordenadores.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ordenador $ordenador)
    {
        return view("ordenadores.show", ["ordenador" => $ordenador]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ordenador $ordenador)
    {
        return view("ordenadores.create", ["ordenador" => $ordenador, "aulas" => Aula::all()]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ordenador $ordenador)
    {
        {
            $ordenador->update([
                "marca" => $request->marca,
                "modelo" => $request->modelo,
                "aula_id" => $request->aula_id,
            ]);
            return redirect()->route('ordenadores.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ordenador $ordenador)
    {
        $ordenador->delete();
        return redirect()->route("ordenadores.index");
    }
}
