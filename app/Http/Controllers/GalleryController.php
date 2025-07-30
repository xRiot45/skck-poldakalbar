<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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


    public function edit(int $id): InertiaResponse
    {
        $gallery = Gallery::with('galleryCategory')->findOrFail($id);
        return Inertia::render('super-admin/pages/gallery-management/galleries/pages/form', [
            'gallery' => $gallery,
        ]);
    }

    public function update(GalleryRequest $request, int $id): RedirectResponse
    {
        $validatedData = $request->validated();
        $gallery = Gallery::findOrFail($id);

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            if ($gallery->image) {
                $oldImagePath = str_replace('/storage/', '', $gallery->image);
                if (Storage::disk('public')->exists($oldImagePath)) {
                    Storage::disk('public')->delete($oldImagePath);
                }
            }

            $file = $request->file('image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('images/galleries', $filename, 'public');
            $validatedData['image'] = '/storage/' . $path;
        }


        $gallery->update($validatedData);
        return redirect()->route('super-admin.galleries.index')->with('success', 'Galeri berhasil diperbarui.');
    }


    public function destroy(int $id): RedirectResponse
    {
        $gallery = Gallery::findOrFail($id);

        if ($gallery->image) {
            $oldImagePath = str_replace('/storage/', '', $gallery->image);
            if (Storage::disk('public')->exists($oldImagePath)) {
                Storage::disk('public')->delete($oldImagePath);
            }
        }

        $gallery->delete();
        return redirect()->route('super-admin.galleries.index')->with('success', 'Galeri berhasil dihapus.');
    }
}
