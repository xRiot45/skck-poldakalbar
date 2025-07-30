<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;
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

    public function store(TaskRequest $request): RedirectResponse
    {
        Task::create($request->validated());
        return redirect()
            ->route('super-admin.task.index')
            ->with([
                'success' => 'Tugas berhasil ditambahkan',
            ]);
    }


    public function edit(int $id): InertiaResponse
    {
        $task = Task::findOrFail($id);
        return Inertia::render('super-admin/pages/profile-management/task/pages/form', [
            'task' => $task,
        ]);
    }


    public function update(TaskRequest $request, int $id): RedirectResponse
    {
        $task = Task::findOrFail($id);
        $task->update($request->validated());
        return redirect()
            ->route('super-admin.task.index')
            ->with([
                'success' => 'Tugas berhasil diperbarui',
            ]);
    }


    public function destroy(int $id): RedirectResponse
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return redirect()
            ->route('super-admin.task.index')
            ->with([
                'success' => 'Tugas berhasil dihapus',
            ]);
    }
}
