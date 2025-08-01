<?php

namespace App\Http\Controllers\User;

use App\Enums\GalleryStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\News;
use App\Models\Video;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class HomepageController extends Controller
{
    public function index(): InertiaResponse
    {
        $galleries = Gallery::with('galleryCategory')->where('status', GalleryStatusEnum::PUBLISHED)->get();
        $videos = Video::with('videoCategory')->get();
        $news = News::with('newsCategory')->where('status', GalleryStatusEnum::PUBLISHED)->get();
        return Inertia::render('user/pages/homepage/index', [
            'galleries' => $galleries,
            'videos' => $videos,
            'news' => $news
        ]);
    }
}
