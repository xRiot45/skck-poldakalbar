<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsCategoryRequest;
use App\Models\NewsCategory;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class NewsCategoryController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $newsCategories = NewsCategory::all();
        return Inertia::render('super-admin/pages/news-management/news-categories/index', [
            'newsCategories' => $newsCategories,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/news-management/news-categories/pages/form');
    }

    public function store(NewsCategoryRequest $request): RedirectResponse
    {
        NewsCategory::create($request->validated());
        return redirect()->route('super-admin.news-categories.index')->with('success', 'Kategori Berita berhasil dibuat.');
    }

    public function edit(int $id): InertiaResponse
    {
        $newsCategory = NewsCategory::findOrFail($id);
        return Inertia::render('super-admin/pages/news-management/news-categories/pages/form', [
            'newsCategory' => $newsCategory,
        ]);
    }

    public function update(NewsCategoryRequest $request, int $id): RedirectResponse
    {
        $newsCategory = NewsCategory::findOrFail($id);
        $newsCategory->update($request->validated());
        return redirect()->route('super-admin.news-categories.index')->with('success', 'Kategori Berita berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $newsCategory = NewsCategory::findOrFail($id);
        $newsCategory->delete();
        return redirect()->route('super-admin.news-categories.index')->with('success', 'Kategori Berita berhasil dihapus.');
    }
}
