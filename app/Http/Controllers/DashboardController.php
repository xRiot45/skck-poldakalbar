<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\News;
use App\Models\Video;
use App\Models\Visitor;
use Carbon\Carbon;
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
        $visitorsPerMonth = Visitor::selectRaw('MONTH(created_at) as month, COUNT(*) as total_visitors')
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->map(function ($item) {
                return [
                    'month' => Carbon::create()->month($item->month)->format('M'),
                    'total_visitors' => $item->total_visitors,
                ];
            });

        return Inertia::render('super-admin/pages/dashboard/index', [
            'totalVisitors' => $totalVisitors->count(),
            'totalNews' => $totalNews->count(),
            'totalVideos' => $totalVideos->count(),
            'totalGalleries' => $totalGalleries->count(),
            'visitorsPerMonth' => $visitorsPerMonth->toArray(),
        ]);
    }
}
