<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Linea extends Model
{
    use HasFactory;

    public function producto(){
        return $this->belongsTo(Producto::class);
    }

    public function tickets(){
        return $this->belongsTo(Ticket::class);
    }

}
