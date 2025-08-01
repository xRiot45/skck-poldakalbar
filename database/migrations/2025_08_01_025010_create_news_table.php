<?php

use App\Enums\NewsStatusEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->string('slug')->unique();
            $table->text('content');
            $table->string('thumbnail');
            $table->foreignId('news_category_id')->constrained('news_categories')->restrictOnDelete();
            $table->enum('status', NewsStatusEnum::values())->default(NewsStatusEnum::DRAFT->value);
            $table->boolean('is_highlight')->default(false);
            $table->integer('views')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
