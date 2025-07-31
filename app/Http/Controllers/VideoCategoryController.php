<?php

namespace App\Http\Controllers;

use App\Http\Requests\VideoCategoryRequest;
use App\Models\VideoCategory;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class VideoCategoryController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $videoCategories = VideoCategory::all();
        return Inertia::render('super-admin/pages/video-management/video-categories/index', [
            'videoCategories' => $videoCategories,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/video-management/video-categories/pages/form');
    }

    public function store(VideoCategoryRequest $request): RedirectResponse
    {
        VideoCategory::create($request->validated());
        return redirect()->route('super-admin.video-categories.index')->with('success', 'Kategori video berhasil dibuat.');
    }

    public function edit(int $id): InertiaResponse
    {
        $videoCategory = VideoCategory::findOrFail($id);
        return Inertia::render('super-admin/pages/video-management/video-categories/pages/form', [
            'videoCategory' => $videoCategory,
        ]);
    }

    public function update(VideoCategoryRequest $request, int $id): RedirectResponse
    {
        $videoCategory = VideoCategory::findOrFail($id);
        $videoCategory->update($request->validated());
        return redirect()->route('super-admin.video-categories.index')->with('success', 'Kategori video berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $videoCategory = VideoCategory::findOrFail($id);
        $videoCategory->delete();
        return redirect()->route('super-admin.video-categories.index')->with('success', 'Kategori video berhasil dihapus.');
    }
}
