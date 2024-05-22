<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $table = 'albumes';

    protected $fillable = ['nombre', 'imagen'];

    public function canciones()
    {
        return $this->belongsToMany(Cancion::class);
    }

    public function tiempo()
    {
        $segundos = 0;
        foreach ($this->canciones as $cancion) {
            $segundos += $cancion->duracion;
        }
        if (!$segundos) {
            return "Sin canciones";
        }
        $minutos = floor($segundos / 60);
        $segundosRestantes = $segundos % 60;
        if ($segundosRestantes) {
            return "$minutos:$segundosRestantes";
        } else {
            return "$minutos:00";
        }
    }
}
