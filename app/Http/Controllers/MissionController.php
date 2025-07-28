<?php

namespace App\Http\Controllers;

use App\Http\Requests\MissionRequest;
use App\Models\Mission;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class MissionController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $missions = Mission::all();
        return Inertia::render('super-admin/pages/profile-management/mission/index', [
            'missions' => $missions,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/profile-management/mission/pages/form');
    }

    public function store(MissionRequest $request): RedirectResponse
    {
        Mission::create($request->validated());
        return redirect()->route('super-admin.mission.index')->with('success', 'Misi berhasil ditambahkan');
    }

    public function edit(int $id): InertiaResponse
    {
        $mission = Mission::findOrFail($id);
        return Inertia::render('super-admin/pages/profile-management/mission/pages/form', [
            'mission' => $mission,
        ]);
    }

    public function update(MissionRequest $request, int $id): RedirectResponse
    {
        $mission = Mission::findOrFail($id);
        $mission->update($request->validated());
        return redirect()->route('super-admin.mission.index')->with('success', 'Misi berhasil diperbarui');
    }

    public function destroy(int $id): RedirectResponse
    {
        $mission = Mission::findOrFail($id);
        $mission->delete();
        return redirect()->route('super-admin.mission.index')->with('success', 'Misi berhasil dihapus');
    }
}
