<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryCategoryRequest;
use App\Models\GalleryCategory;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class GalleryCategoryController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $galleryCategories = GalleryCategory::all();
        return Inertia::render('super-admin/pages/gallery-management/gallery-categories/index', [
            'galleryCategories' => $galleryCategories,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/gallery-management/gallery-categories/pages/form');
    }

    public function store(GalleryCategoryRequest $request): RedirectResponse
    {
        GalleryCategory::create($request->validated());
        return redirect()->route('super-admin.gallery-categories.index')->with('success', 'Kategori galeri berhasil dibuat.');
    }

    public function edit(int $id): InertiaResponse
    {
        $galleryCategory = GalleryCategory::findOrFail($id);
        return Inertia::render('super-admin/pages/gallery-management/gallery-categories/pages/form', [
            'galleryCategory' => $galleryCategory,
        ]);
    }

    public function update(GalleryCategoryRequest $request, int $id): RedirectResponse
    {
        $galleryCategory = GalleryCategory::findOrFail($id);
        $galleryCategory->update($request->validated());
        return redirect()->route('super-admin.gallery-categories.index')->with('success', 'Kategori galeri berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $galleryCategory = GalleryCategory::findOrFail($id);
        $galleryCategory->delete();
        return redirect()->route('super-admin.gallery-categories.index')->with('success', 'Kategori galeri berhasil dihapus.');
    }
}
