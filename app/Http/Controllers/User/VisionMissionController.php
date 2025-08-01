<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use App\Models\OrganizationalFunction;
use App\Models\Task;
use App\Models\Vision;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class VisionMissionController extends Controller
{
    public function index(): InertiaResponse
    {
        $visions = Vision::all();
        $missions = Mission::all();
        return Inertia::render('user/pages/vision-mission/index', [
            'visions' => $visions,
            'missions' => $missions
        ]);
    }
}
