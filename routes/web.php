<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RoleController;
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

        // // Permissions
        // Route::prefix('/permissions')
        //     ->controller(PermissionController::class)
        //     ->group(function () {
        //         Route::get('/', 'index')->name('admin.permissions.index');
        //         Route::get('/create', 'create')->name('admin.permissions.create');
        //         Route::post('/create', 'store')->name('admin.permissions.store');
        //         Route::get('/edit/{id}', 'edit')->name('admin.permissions.edit');
        //         Route::put('/edit/{id}', 'update')->name('admin.permissions.update');
        //         Route::delete('/delete/{id}', 'destroy')->name('admin.permissions.destroy');
        //         Route::delete('/delete-all', 'destroy_all')->name('admin.permissions.destroy_all');
        //     });

        // // Role Has Permissions
        // Route::prefix('/manage-role-permissions')
        //     ->controller(ManageRolePermissionController::class)
        //     ->group(function () {
        //         Route::get('/', 'index')->name('admin.manage-role-permission.index');
        //         Route::get('/create', 'create')->name('admin.manage-role-permission.create');
        //         Route::post('/create', 'store')->name('admin.manage-role-permission.store');
        //         Route::get('/edit/{id}', 'edit')->name('admin.manage-role-permission.edit');
        //         Route::put('/edit/{id}', 'update')->name('admin.manage-role-permission.update');
        //     });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
