<?php

namespace App\Http\Controllers;

use App\Http\Requests\VisionRequest;
use App\Models\Vision;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class VisionController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $visions = Vision::all();
        return Inertia::render('super-admin/pages/profile-management/vision/index', [
            'visions' => $visions,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/profile-management/vision/pages/form');
    }

    public function store(VisionRequest $request): RedirectResponse
    {
        Vision::create($request->validated());
        return redirect()
            ->route('super-admin.vision.index')
            ->with([
                'success' => 'Add vision successfully',
            ]);
    }

    public function edit(int $id): InertiaResponse
    {
        $vision = Vision::findOrFail($id);
        return Inertia::render('super-admin/pages/profile-management/vision/pages/form', [
            'vision' => $vision,
        ]);
    }

    public function update(VisionRequest $request, int $id): RedirectResponse
    {
        $vision = Vision::findOrFail($id);
        $vision->update($request->validated());
        return redirect()
            ->route('super-admin.vision.index')
            ->with([
                'success' => 'Update vision successfully',
            ]);
    }

    public function destroy(int $id): RedirectResponse
    {
        $vision = Vision::findOrFail($id);
        $vision->delete();
        return redirect()
            ->route('super-admin.vision.index')
            ->with([
                'success' => 'Delete vision successfully',
            ]);
    }
}
