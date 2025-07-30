<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrganizationalFunctionRequest;
use App\Models\OrganizationalFunction;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class OrganizationalFunctionController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $organizationalFunctions = OrganizationalFunction::all();
        return Inertia::render('super-admin/pages/profile-management/organizational-function/index', [
            'organizationalFunctions' => $organizationalFunctions,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/profile-management/organizational-function/pages/form');
    }

    public function store(OrganizationalFunctionRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        OrganizationalFunction::create($validatedData);

        return redirect()->route('super-admin.organizational-function.index')->with('success', 'Fungsi berhasil dibuat.');
    }

    public function edit(int $id): InertiaResponse
    {
        $organizationalFunction = OrganizationalFunction::findOrFail($id);
        return Inertia::render('super-admin/pages/profile-management/organizational-function/pages/form', [
            'organizationalFunction' => $organizationalFunction,
        ]);
    }


    public function update(OrganizationalFunctionRequest $request, int $id): RedirectResponse
    {
        $organizationalFunction = OrganizationalFunction::findOrFail($id);
        $organizationalFunction->update($request->validated());
        return redirect()
            ->route('super-admin.organizational-function.index')
            ->with([
                'success' => 'Fungsi berhasil diperbarui',
            ]);
    }

    public function destroy(int $id): RedirectResponse
    {
        $organizationalFunction = OrganizationalFunction::findOrFail($id);
        $organizationalFunction->delete();

        return redirect()
            ->route('super-admin.organizational-function.index')
            ->with([
                'success' => 'Fungsi berhasil dihapus',
            ]);
    }
}
