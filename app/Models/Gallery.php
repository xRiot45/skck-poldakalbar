<?php

namespace App\Models;

use App\Enums\GalleryStatusEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Gallery extends Model
{
    protected $table = 'galleries';

    protected $fillable = [
        'gallery_category_id',
        'title',
        'slug',
        'image',
        'status',
    ];

    protected $casts = [
        'status' => GalleryStatusEnum::class,
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->slug = Str::slug($model->title);
        });

        static::updating(function ($model) {
            $model->slug = Str::slug($model->title);
        });
    }

    public function galleryCategory(): BelongsTo
    {
        return $this->belongsTo(GalleryCategory::class, 'gallery_category_id');
    }
}
