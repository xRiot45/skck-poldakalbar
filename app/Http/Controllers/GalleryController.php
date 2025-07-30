<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class GalleryController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $galleries = Gallery::with('galleryCategory')->get();
        return Inertia::render('super-admin/pages/gallery-management/galleries/index', [
            'galleries' => $galleries,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/gallery-management/galleries/pages/form');
    }

    public function store(GalleryRequest $request)
    {
        $validatedData = $request->validated();
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $file = $request->file('image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('images/galleries', $filename, 'public');

            $validatedData['image'] = '/' . 'storage/' . $path;
        }

        Gallery::create($validatedData);
        return redirect()->route('super-admin.galleries.index')->with('success', 'Galeri berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
