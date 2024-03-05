<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('etiquetable', function (Blueprint $table) {
            $table->foreignId('etiqueta_id');
            $table->morphs('etiquetable');
            $table->timestamps();
            $table->primary(['etiqueta_id', 'etiquetable_type', 'etiquetable_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etiquetable');
    }
};
