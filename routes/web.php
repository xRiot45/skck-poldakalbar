<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\{HomepageController, VisionMissionController, ProfileController};
use App\Http\Controllers\{ContactFormController, DashboardController, GalleryCategoryController, GalleryController, MissionController, NewsCategoryController, NewsController, OrganizationalFunctionController, RoleController, TaskController, VideoCategoryController, VideoController, VisionController};

/*
|--------------------------------------------------------------------------
| USER ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['log.visitor', 'throttle:60,1'])->group(function () {
    Route::get('/', [HomepageController::class, 'index'])->name('homepage');
    Route::get('/visi-misi', [VisionMissionController::class, 'index'])->name('visi-misi');
    Route::get('/profil', [ProfileController::class, 'index'])->name('profil');

    // News
    Route::get('/berita', [NewsController::class, 'indexUser'])->name('berita');
    Route::get('/berita/{slug}', [NewsController::class, 'show'])->name('news.show');

    // Gallery
    Route::get('/galeri', [GalleryController::class, 'indexUser'])->name('galeri');

    // Static Pages
    Route::inertia('/skck', 'user/pages/skck/index')->name('skck');
    Route::inertia('/izin-keramaian', 'user/pages/izin-keramaian/index')->name('izin-keramaian');
    Route::inertia('/sendak', 'user/pages/sendak/index')->name('sendak');
    Route::inertia('/kontak', 'user/pages/contact/index')->name('contact');

    // Contact Form
    Route::post('/contact', [ContactFormController::class, 'store'])
        ->middleware('throttle:5,1')
        ->name('contact.store');
});

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES
|--------------------------------------------------------------------------
*/
Route::prefix('super-admin')
    ->middleware(['auth', 'verified', 'role:super-admin', 'throttle:60,1'])
    ->group(function () {
        // Dashboard
        Route::get('/dashboard', [DashboardController::class, 'indexSuperAdmin'])->name('super-admin.dashboard');

        /*
        |-----------------------------
        | Access Control Management
        |-----------------------------
        */
        Route::prefix('access-control-management/roles')
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

        /*
        |-----------------------------
        | Profile Management
        |-----------------------------
        */
        Route::prefix('profile-management')->group(function () {
            // Vision
            Route::prefix('vision')
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
            Route::prefix('mission')
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
            Route::prefix('task')
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
            Route::prefix('organizational-function')
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

        /*
        |-----------------------------
        | Gallery Management
        |-----------------------------
        */
        Route::prefix('gallery-management')->group(function () {
            // Gallery Categories
            Route::prefix('gallery-categories')
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
            Route::prefix('galleries')
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

        /*
        |-----------------------------
        | Video Management
        |-----------------------------
        */
        Route::prefix('video-management')->group(function () {
            // Video Categories
            Route::prefix('video-categories')
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
            Route::prefix('videos')
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

        /*
        |-----------------------------
        | News Management
        |-----------------------------
        */
        Route::prefix('news-management')->group(function () {
            // News Categories
            Route::prefix('news-categories')
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
            Route::prefix('news')
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

        /*
        |-----------------------------
        | Contact Management
        |-----------------------------
        */
        Route::prefix('contact-management/contacts-form')
            ->controller(ContactFormController::class)
            ->group(function () {
                Route::get('/', 'indexSuperAdmin')->name('super-admin.contacts-form.index');
                Route::delete('/delete/{contact}', 'destroy')->name('super-admin.contacts-form.destroy');
            });
    });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
