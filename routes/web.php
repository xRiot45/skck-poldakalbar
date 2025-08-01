<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GalleryCategoryController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MissionController;
use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OrganizationalFunctionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\VideoCategoryController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\VisionController;
use App\Models\OrganizationalFunction;
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

        // Organizational Function
        Route::prefix('/organizational-function')
            ->controller(OrganizationalFunctionController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.organizational-function.index');
                Route::get('/create', 'create')->name('super-admin.organizational-function.create');
                Route::post('/create', 'store')->name('super-admin.organizational-function.store');
                Route::get('/edit/{organizational_function}', 'edit')->name('super-admin.organizational-function.edit');
                Route::put('/edit/{organizational_function}', 'update')->name('super-admin.organizational-function.update');
                Route::delete('/delete/{organizational_function}', 'destroy')->name('super-admin.organizational-function.destroy');
            });
    });

    // Gallery Management
    Route::prefix('/super-admin/gallery-management')->group(function () {
        // Gallery Categories
        Route::prefix('/gallery-categories')
            ->controller(GalleryCategoryController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.gallery-categories.index');
                Route::get('/create', 'create')->name('super-admin.gallery-categories.create');
                Route::post('/create', 'store')->name('super-admin.gallery-categories.store');
                Route::get('/edit/{gallery_category}', 'edit')->name('super-admin.gallery-categories.edit');
                Route::put('/edit/{gallery_category}', 'update')->name('super-admin.gallery-categories.update');
                Route::delete('/delete/{gallery_category}', 'destroy')->name('super-admin.gallery-categories.destroy');
            });

        // Galleries
        Route::prefix('/galleries')
            ->controller(GalleryController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.galleries.index');
                Route::get('/create', 'create')->name('super-admin.galleries.create');
                Route::post('/create', 'store')->name('super-admin.galleries.store');
                Route::get('/edit/{gallery}', 'edit')->name('super-admin.galleries.edit');
                Route::put('/edit/{gallery}', 'update')->name('super-admin.galleries.update');
                Route::delete('/delete/{gallery}', 'destroy')->name('super-admin.galleries.destroy');
            });
    });

    // Video Management
    Route::prefix('/super-admin/video-management')->group(function () {
        // Video Categories
        Route::prefix('/video-categories')
            ->controller(VideoCategoryController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.video-categories.index');
                Route::get('/create', 'create')->name('super-admin.video-categories.create');
                Route::post('/create', 'store')->name('super-admin.video-categories.store');
                Route::get('/edit/{video_category}', 'edit')->name('super-admin.video-categories.edit');
                Route::put('/edit/{video_category}', 'update')->name('super-admin.video-categories.update');
                Route::delete('/delete/{video_category}', 'destroy')->name('super-admin.video-categories.destroy');
            });

        // Videos
        Route::prefix('/videos')
            ->controller(VideoController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.videos.index');
                Route::get('/create', 'create')->name('super-admin.videos.create');
                Route::post('/create', 'store')->name('super-admin.videos.store');
                Route::get('/edit/{video}', 'edit')->name('super-admin.videos.edit');
                Route::put('/edit/{video}', 'update')->name('super-admin.videos.update');
                Route::delete('/delete/{video}', 'destroy')->name('super-admin.videos.destroy');
            });
    });

    // News Management
    Route::prefix('/super-admin/news-management')->group(function () {
        // News Categories
        Route::prefix('/news-categories')
            ->controller(NewsCategoryController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.news-categories.index');
                Route::get('/create', 'create')->name('super-admin.news-categories.create');
                Route::post('/create', 'store')->name('super-admin.news-categories.store');
                Route::get('/edit/{news_category}', 'edit')->name('super-admin.news-categories.edit');
                Route::put('/edit/{news_category}', 'update')->name('super-admin.news-categories.update');
                Route::delete('/delete/{news_category}', 'destroy')->name('super-admin.news-categories.destroy');
            });

        // News
        Route::prefix('/news')
            ->controller(NewsController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.news.index');
                Route::get('/create', 'create')->name('super-admin.news.create');
                Route::post('/create', 'store')->name('super-admin.news.store');
                Route::get('/edit/{news}', 'edit')->name('super-admin.news.edit');
                Route::put('/edit/{news}', 'update')->name('super-admin.news.update');
                Route::delete('/delete/{news}', 'destroy')->name('super-admin.news.destroy');
            });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
