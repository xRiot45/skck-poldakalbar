<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class GalleryController extends Controller
{
    public function index(): InertiaResponse
    {
        $galleries = Gallery::all();
        $galleryCategory = GalleryCategory::all();
        return Inertia::render('user/pages/gallery/index', [
            'galleries' => $galleries,
            'galleryCategory' => $galleryCategory
        ]);
    }
}
