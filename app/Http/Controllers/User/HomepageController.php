<?php

namespace App\Http\Controllers\User;

use App\Enums\GalleryStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class HomepageController extends Controller
{
    public function index(): InertiaResponse
    {
        $galleries = Gallery::with('galleryCategory')->where('status', GalleryStatusEnum::PUBLISHED)->get();
        return Inertia::render('user/pages/homepage/index', [
            'galleries' => $galleries,
        ]);
    }
}
