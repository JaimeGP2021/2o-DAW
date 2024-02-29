<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("albumes.index", ["albumes"=>Album::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("albumes.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'imagen' => 'required|mimes:jpg,png,jpeg|max:400',
        ]);

        $image = $request->file('imagen');
        $name = hash('sha256', time() . $image->getClientOriginalName()) . ".png";
        $image->storeAs('uploads/albumes', $name, 'public');

        $manager = new ImageManager(new Driver());
        $imageR = $manager->read(Storage::disk('public')->get('uploads/albumes/' . $name));
        $imageR->scaleDown(200); //cambiar esto para ajustar el reescalado de la imagen
        $rute = Storage::path('public/uploads/albumes/' . $name);
        $imageR->save($rute);

        Album::create([
            "nombre" => $request->nombre,
            "imagen" => 'storage/uploads/albumes/' . $name,
        ]);
        return redirect()->route("albumes.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        return view("albumes.show", ["album"=>$album]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Album $album)
    {
        return view("albumes.edit", ["album" => $album]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Album $album)
    {
        $request->validate([
            'imagen' => 'required|mimes:jpg,png,jpeg|max:400',
        ]);

        $image = $request->file('imagen');
        $name = hash('sha256', time() . $image->getClientOriginalName()) . ".png";
        $image->storeAs('uploads/albumes', $name, 'public');

        $manager = new ImageManager(new Driver());
        $imageR = $manager->read(Storage::disk('public')->get('uploads/albumes/' . $name));
        $imageR->scaleDown(200); //Cambiar esto para ajustar el reescalado de la imagen
        $rute = Storage::path('public/uploads/albumes/' . $name);
        $imageR->save($rute);

        $album->update([
            "nombre" => $request->nombre,
            "imagen" => 'storage/uploads/albumes/' . $name,
        ]);
        return redirect()->route("albumes.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Album $album)
    {
        if ($album->canciones->count())
        {
            return redirect()->route("albumes.index")->with('error', 'Acción no permitida');
        }
        else
        {
            Album::destroy([$album->id]);
            return redirect()->route("albumes.index");
        }
    }
}
