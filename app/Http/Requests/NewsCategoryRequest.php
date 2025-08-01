<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
                'unique:news_categories,name,' . $this->route('news_category'),
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama kategori berita wajib diisi.',
            'name.string'   => 'Nama kategori berita harus berupa teks.',
            'name.max'      => 'Nama kategori berita maksimal 255 karakter.',
            'name.unique'   => 'Nama kategori berita sudah digunakan.',
        ];
    }
}
