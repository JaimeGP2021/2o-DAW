<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class Caja extends Controller
{
    public function escaner(){
        return view('cajaAmiga.escaner');
    }

    public function escaneado(Request $request){
        $busqueda = $request->input('input');

        $productos = Producto::where('codigo' == $busqueda)->get();

        return view('cajaAmiga.escaner', ["productos"=>$productos]);
    }

}
