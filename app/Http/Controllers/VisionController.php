<?php

namespace App\Http\Controllers;

use App\Models\Vision;
use Illuminate\Http\Request;
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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Vision $vision)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vision $vision)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vision $vision)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vision $vision)
    {
        //
    }
}
