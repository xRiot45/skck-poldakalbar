<?php

namespace App\Http\Controllers;

use App\Http\Requests\VideoRequest;
use App\Models\Video;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class VideoController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $videos = Video::with('videoCategory')->get();
        return Inertia::render('super-admin/pages/video-management/videos/index', [
            'videos' => $videos,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/video-management/videos/pages/form');
    }

    public function store(VideoRequest $request): RedirectResponse
    {
        Video::create($request->validated());
        return redirect()->route('super-admin.videos.index')->with('success', 'Video berhasil ditambahkan.');
    }

    public function edit(int $id): InertiaResponse
    {
        $video = Video::find($id);
        return Inertia::render('super-admin/pages/video-management/videos/pages/form', [
            'video' => $video,
        ]);
    }

    public function update(VideoRequest $request, int $id): RedirectResponse
    {
        $video = Video::find($id);
        $video->update($request->validated());
        return redirect()->route('super-admin.videos.index')->with('success', 'Video berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $video = Video::find($id);
        $video->delete();
        return redirect()->route('super-admin.videos.index')->with('success', 'Video berhasil dihapus.');
    }
}
