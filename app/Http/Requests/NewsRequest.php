<?php

namespace App\Http\Requests;

use App\Enums\NewsStatusEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class NewsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
            'thumbnail' => 'sometimes|nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'news_category_id' => 'sometimes|required|exists:news_categories,id',
            'status' => ['sometimes', 'required', new Enum(NewsStatusEnum::class)],
            'is_highlight' => 'sometimes|required|boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul berita wajib diisi.',
            'title.string' => 'Judul berita harus berupa teks.',
            'title.max' => 'Judul berita tidak boleh lebih dari 255 karakter.',

            'content.required' => 'Konten berita wajib diisi.',
            'content.string' => 'Konten berita harus berupa teks.',

            'thumbnail.image' => 'Thumbnail harus berupa file gambar.',
            'thumbnail.mimes' => 'Thumbnail hanya boleh berformat: jpg, jpeg, png, atau webp.',
            'thumbnail.max' => 'Ukuran thumbnail tidak boleh lebih dari 2MB.',

            'news_category_id.required' => 'Kategori berita wajib dipilih.',
            'news_category_id.exists' => 'Kategori berita yang dipilih tidak valid.',

            'status.required' => 'Status berita wajib diisi.',
            'status.enum' => 'Status berita tidak valid.',

            'is_highlight.required' => 'Status highlight wajib diisi.',
            'is_highlight.boolean' => 'Status highlight harus berupa true atau false.',
        ];
    }

    protected function prepareForValidation()
    {
        if ($this->has('is_highlight')) {
            $this->merge([
                'is_highlight' => filter_var($this->input('is_highlight'), FILTER_VALIDATE_BOOLEAN),
            ]);
        }
    }
}
