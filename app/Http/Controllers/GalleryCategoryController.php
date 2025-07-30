<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryCategoryRequest;
use App\Models\GalleryCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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

    /**
     * Display the specified resource.
     */
    public function show(GalleryCategory $galleryCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GalleryCategory $galleryCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, GalleryCategory $galleryCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GalleryCategory $galleryCategory)
    {
        //
    }
}
