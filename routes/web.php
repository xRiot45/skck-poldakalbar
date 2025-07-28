<?php

use App\Http\Controllers\DashboardController;
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
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
