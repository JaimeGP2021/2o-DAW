<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vuelo extends Model
{
    use HasFactory;

    public function compania()
    {
        return $this->belongsTo(Compania::class);
    }

    public function aeropuerto()
    {
        return $this->belongsTo(Aeropuerto::class);
    }
}
