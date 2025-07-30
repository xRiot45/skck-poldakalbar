<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\VisionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/visi', function () {
    return Inertia::render('vision/vision2');
})->name('visi');

Route::get('/profil', function () {
    return Inertia::render('profile/profile3');
})->name('profil');

Route::get('/skck', function () {
    return Inertia::render('skck/skck3');
})->name('skck');

Route::get('/berita', function () {
    return Inertia::render('news/news1');
})->name('berita');

Route::get('/kontak', function () {
    return Inertia::render('contact/contact');
})->name('contact');

Route::get('/galeri', function () {
    return Inertia::render('gallery/gallery');
})->name('galeri');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// ADMIN ROUTES
Route::middleware(['auth', 'verified', 'role:super-admin'])->group(function () {
    Route::get('/super-admin/dashboard', [DashboardController::class, 'indexSuperAdmin'])->name('super-admin.dashboard');

    // RBAC Management
    Route::prefix('/super-admin/access-control-management')->group(function () {
        // Roles
        Route::prefix('/roles')
            ->controller(RoleController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.roles.index');
                Route::get('/create', 'create')->name('super-admin.roles.create');
                Route::post('/create', 'store')->name('super-admin.roles.store');
                Route::get('/edit/{id}', 'edit')->name('super-admin.roles.edit');
                Route::put('/edit/{id}', 'update')->name('super-admin.roles.update');
                Route::delete('/delete/{id}', 'destroy')->name('super-admin.roles.destroy');
                Route::delete('/delete-all', 'destroy_all')->name('super-admin.roles.destroy_all');
            });
    });

    // Profile Management
    Route::prefix('/super-admin/profile-management')->group(function () {
        // Vision
        Route::prefix('/vision')
            ->controller(VisionController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.vision.index');
                Route::get('/create', 'create')->name('super-admin.vision.create');
                Route::post('/create', 'store')->name('super-admin.vision.store');
                Route::get('/edit/{vision}', 'edit')->name('super-admin.vision.edit');
                Route::put('/edit/{vision}', 'update')->name('super-admin.vision.update');
                Route::delete('/delete/{vision}', 'destroy')->name('super-admin.vision.destroy');
            });

        // Mission
        Route::prefix('/mission')
            ->controller(MissionController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.mission.index');
                Route::get('/create', 'create')->name('super-admin.mission.create');
                Route::post('/create', 'store')->name('super-admin.mission.store');
                Route::get('/edit/{mission}', 'edit')->name('super-admin.mission.edit');
                Route::put('/edit/{mission}', 'update')->name('super-admin.mission.update');
                Route::delete('/delete/{mission}', 'destroy')->name('super-admin.mission.destroy');
            });

        // Task
        Route::prefix('/task')
            ->controller(TaskController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.task.index');
                Route::get('/create', 'create')->name('super-admin.task.create');
                Route::post('/create', 'store')->name('super-admin.task.store');
                Route::get('/edit/{task}', 'edit')->name('super-admin.task.edit');
                Route::put('/edit/{task}', 'update')->name('super-admin.task.update');
                Route::delete('/delete/{task}', 'destroy')->name('super-admin.task.destroy');
            });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
