<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use Illuminate\Http\RedirectResponse;
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

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/access-control-management/roles/pages/form');
    }

    public function store(RoleRequest $request): RedirectResponse
    {
        Role::create($request->validated());
        return redirect()
            ->route('super-admin.roles.index')
            ->with([
                'success' => 'Add role successfully',
            ]);
    }

    public function edit(int $id): InertiaResponse
    {
        $role = Role::findOrFail($id);
        return Inertia::render('super-admin/pages/access-control-management/roles/pages/form', [
            'role' => $role,
        ]);
    }

    public function update(RoleRequest $request, int $id): RedirectResponse
    {
        $role = Role::findOrFail($id);
        $role->update($request->validated());
        return redirect()
            ->route('super-admin.roles.index')
            ->with([
                'success' => 'Update role successfully',
            ]);
    }

    public function destroy(int $id): RedirectResponse
    {
        $role = Role::findOrFail($id);
        $role->delete();
        return redirect()
            ->route('super-admin.roles.index')
            ->with([
                'success' => 'Delete role successfully',
            ]);
    }
}
