<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artista extends Model
{
    use HasFactory;

    protected $fillable = ["nombre"];

    public function canciones()
    {
        return $this->belongsToMany(Cancion::class);
    }
}