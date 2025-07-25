<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/visi', function () {
    return Inertia::render('visi');
})->name('visi');

Route::get('/profil', function () {
    return Inertia::render('profil');
})->name('profil');

Route::get('/skck', function () {
    return Inertia::render('skck');
})->name('skck');

Route::get('/kontak', function () {
    return Inertia::render('kontak');
})->name('kontak');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
