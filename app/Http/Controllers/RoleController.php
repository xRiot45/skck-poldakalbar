<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $roles = Role::all();
        return Inertia::render('super-admin/pages/access-control-management/roles/index', [
            'roles' => $roles,
        ]);
    }
}
