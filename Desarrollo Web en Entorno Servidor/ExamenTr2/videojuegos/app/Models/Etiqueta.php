<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etiqueta extends Model
{
    use HasFactory;

    public function videojuegos()
    {
        return $this->morphedByMany(Videojuego::class, "etiquetable");
    }

    public function desarrolladoras()
    {
        return $this->morphedByMany(Desarrolladora::class, "etiquetable");
    }
}
