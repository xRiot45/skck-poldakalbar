<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class DashboardController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/dashboard/index');
    }
}
