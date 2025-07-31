<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'video_category_id' => 'required|exists:video_categories,id',
            'title'             => 'required|string|max:255',
            'youtube_video_id'  => 'required|string|max:255',
            'youtube_url'       => 'required|url|max:255',
            'description'       => 'nullable|string',
            'duration'          => 'required|string|max:20',
        ];
    }

    public function messages(): array
    {
        return [
            'video_category_id.required' => 'Kategori video wajib dipilih.',
            'video_category_id.exists'   => 'Kategori video yang dipilih tidak valid.',
            'title.required'             => 'Judul video wajib diisi.',
            'title.string'               => 'Judul video harus berupa teks.',
            'title.max'                  => 'Judul video maksimal :max karakter.',
            'youtube_video_id.required'  => 'ID video YouTube wajib diisi.',
            'youtube_video_id.string'    => 'ID video YouTube harus berupa teks.',
            'youtube_video_id.max'       => 'ID video YouTube maksimal :max karakter.',
            'youtube_url.required'       => 'URL YouTube wajib diisi.',
            'youtube_url.url'            => 'URL YouTube harus berupa tautan yang valid.',
            'youtube_url.max'            => 'URL YouTube maksimal :max karakter.',
            'description.string'         => 'Deskripsi harus berupa teks.',
            'duration.required'          => 'Durasi video wajib diisi.',
            'duration.string'            => 'Durasi video harus berupa teks.',
            'duration.max'               => 'Durasi video maksimal :max karakter.',
        ];
    }
}
