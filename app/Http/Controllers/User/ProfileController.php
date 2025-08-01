<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\OrganizationalFunction;
use App\Models\Task;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ProfileController extends Controller
{
    public function index(): InertiaResponse
    {
        $tasks = Task::all();
        $organizationalFunction = OrganizationalFunction::all();
        return Inertia::render('user/pages/profile/index', [
            'tasks' => $tasks,
            'organizationalFunctions' => $organizationalFunction
        ]);
    }
}
