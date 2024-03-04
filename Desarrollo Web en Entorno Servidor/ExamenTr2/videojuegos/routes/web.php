<?php

use App\Http\Controllers\VideojuegoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

    Route::get('videojuegos/poseo',[VideojuegoController::class, 'poseo'])->name('videojuegos.poseo')->middleware('auth');
    Route::post('videojuegos/poseo',[VideojuegoController::class, 'poseo_funcion'])->name('videojuegos.poseo_funcion')->middleware('auth');
    Route::resource('videojuegos', VideojuegoController::class)->middleware('auth');

require __DIR__.'/auth.php';
