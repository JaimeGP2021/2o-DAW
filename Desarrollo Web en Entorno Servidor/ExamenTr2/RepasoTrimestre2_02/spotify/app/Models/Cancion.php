<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cancion extends Model
{
    use HasFactory;

    protected $table = 'canciones';

    protected $fillable = ["nombre", "duracion"];

    public function artistas()
    {
        return $this->belongsToMany(Artista::class);
    }

    public function albumes()
    {
        return $this->belongsToMany(Album::class);
    }

    public function formatear()
    {
        $segundos = $this->duracion;
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
