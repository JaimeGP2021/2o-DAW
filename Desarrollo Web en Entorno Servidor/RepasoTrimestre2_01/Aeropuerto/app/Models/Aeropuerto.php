<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aeropuerto extends Model
{
    use HasFactory;

    public function vuelos_salida()
    {
        return $this->hasMany(Vuelo::class, 'aeropuerto_salida_id');
    }

    public function vuelos_llegada()
    {
        return $this->hasMany(Vuelo::class, 'aeropuerto_llegada_id');
    }
}
