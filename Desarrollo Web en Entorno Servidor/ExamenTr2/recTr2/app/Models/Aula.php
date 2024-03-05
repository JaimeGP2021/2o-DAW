<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aula extends Model
{
    use HasFactory;

    public function ordenadores()
    {
        return $this->hasMany(Ordenador::class);
    }

    public function colocados()
    {
        return $this->morphMany(Dispositivo::class, 'colocable');
    }

    public function cambios_origen()
    {
        return $this->hasMany(Cambio::class, "origen_id");
    }

    public function cambios_destino()
    {
        return $this->hasMany(Cambio::class, "destino_id");
    }
}
