<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Billete extends Model
{
    use HasFactory;

    public function usuario ()
    {
        return $this->belongsTo(User::class);
    }

    public function vuelo ()
    {
        return $this->belongsTo(Vuelo::class);
    }
}
