<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class TaskController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $tasks = Task::all();
        return Inertia::render('super-admin/pages/profile-management/task/index', [
            'tasks' => $tasks,
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render('super-admin/pages/profile-management/task/pages/form');
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
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
