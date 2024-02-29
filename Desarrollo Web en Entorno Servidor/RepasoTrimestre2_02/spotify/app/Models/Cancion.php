<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cancion extends Model
{
    use HasFactory;

    protected $table='canciones';

    protected $fillable = ["nombre"];

    public function artistas()
    {
        return $this->belongsToMany(Artista::class);
    }

    public function albumes()
    {
        return $this->belongsToMany(Album::class);
    }
}
