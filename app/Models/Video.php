<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Video extends Model
{
    protected $table = 'videos';

    protected $fillable = [
        'video_category_id',
        'title',
        'youtube_video_id',
        'youtube_url',
        'description'
    ];

    public function videoCategory(): BelongsTo
    {
        return $this->belongsTo(VideoCategory::class);
    }
}
