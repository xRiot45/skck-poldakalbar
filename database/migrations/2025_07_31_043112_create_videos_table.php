<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_category_id')
                ->constrained('video_categories')
                ->restrictOnDelete();
            $table->string('title');
            $table->string('youtube_video_id');
            $table->string('youtube_url');
            $table->text('description')->nullable();
            $table->string('duration', 20);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
