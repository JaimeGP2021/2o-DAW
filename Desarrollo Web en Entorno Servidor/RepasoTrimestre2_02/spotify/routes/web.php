<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistaController;
use App\Http\Controllers\CancionController;
use App\Models\Cancion;
use GuzzleHttp\Promise\CancellationException;
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

Route::resource('canciones', CancionController::class)->parameters(['canciones' => 'cancion'])->middleware('auth');
Route::resource('albumes', AlbumController::class)->parameters(['albumes' => 'album'])->middleware('auth');
Route::resource('artistas', ArtistaController::class)->middleware('auth');

require __DIR__.'/auth.php';
