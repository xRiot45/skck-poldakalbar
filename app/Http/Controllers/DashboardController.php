<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\News;
use App\Models\Video;
use App\Models\Visitor;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class DashboardController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $totalVisitors = Visitor::all();
        $totalNews = News::all();
        $totalVideos = Video::all();
        $totalGalleries = Gallery::all();

        return Inertia::render('super-admin/pages/dashboard/index', [
            'totalVisitors' => $totalVisitors->count(),
            'totalNews' => $totalNews->count(),
            'totalVideos' => $totalVideos->count(),
            'totalGalleries' => $totalGalleries->count(),
        ]);
    }
}
