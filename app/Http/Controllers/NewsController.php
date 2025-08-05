<?php

namespace App\Http\Controllers;

use App\Enums\NewsStatusEnum;
use App\Http\Requests\NewsRequest;
use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class NewsController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $news = News::with('newsCategory')->get();
        return Inertia::render('super-admin/pages/news-management/news/index', [
            'news' => $news,
        ]);
    }

    public function indexUser(): InertiaResponse
    {
        $news = News::with('newsCategory')->where('status', NewsStatusEnum::PUBLISHED)->get();
        $newsCategory = NewsCategory::all();
        return Inertia::render('user/pages/news/index', [
            'news' => $news,
            'newsCategory' => $newsCategory
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/news-management/news/pages/form');
    }

    public function store(NewsRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        if (isset($validatedData['is_highlight']) && $validatedData['is_highlight'] == true) {
            News::where('is_highlight', true)->update(['is_highlight' => false]);
        }

        if ($request->hasFile('thumbnail') && $request->file('thumbnail')->isValid()) {
            $file = $request->file('thumbnail');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('images/news', $filename, 'public');

            $validatedData['thumbnail'] = '/' . 'storage/' . $path;
        }

        News::create($validatedData);
        return redirect()->route('super-admin.news.index')->with('success', 'Berita berhasil dibuat.');
    }

    public function show(string $slug): InertiaResponse
    {
        $news = News::where('slug', $slug)->with('newsCategory')->firstOrFail();
        return Inertia::render('user/pages/news/detail/index', [
            'news' => $news
        ]);
    }

    public function edit(int $id): InertiaResponse
    {
        $news = News::findOrFail($id);
        return Inertia::render('super-admin/pages/news-management/news/pages/form', [
            'news' => $news,
        ]);
    }

    public function update(NewsRequest $request, int $id): RedirectResponse
    {
        $validatedData = $request->validated();
        $news = News::findOrFail($id);

        if (isset($validatedData['is_highlight']) && $validatedData['is_highlight'] == true) {
            News::where('is_highlight', true)
                ->where('id', '!=', $news->id)
                ->update(['is_highlight' => false]);
        }

        if ($request->hasFile('thumbnail') && $request->file('thumbnail')->isValid()) {
            if ($news->thumbnail) {
                $oldImagePath = str_replace('/storage/', '', $news->thumbnail);
                if (Storage::disk('public')->exists($oldImagePath)) {
                    Storage::disk('public')->delete($oldImagePath);
                }
            }

            $file = $request->file('thumbnail');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('images/news', $filename, 'public');

            $validatedData['thumbnail'] = '/' . 'storage/' . $path;
        }

        $news->update($validatedData);
        return redirect()->route('super-admin.news.index')->with('success', 'Berita berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $news = News::findOrFail($id);
        if ($news->thumbnail) {
            $oldImagePath = str_replace('/storage/', '', $news->thumbnail);
            if (Storage::disk('public')->exists($oldImagePath)) {
                Storage::disk('public')->delete($oldImagePath);
            }
        }
        $news->delete();
        return redirect()->route('super-admin.news.index')->with('success', 'Berita berhasil dihapus.');
    }
}
