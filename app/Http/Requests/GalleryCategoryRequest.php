<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GalleryCategoryRequest extends FormRequest
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
                'unique:gallery_categories,name,' . $this->route('gallery_category'),
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama kategori galeri wajib diisi.',
            'name.string'   => 'Nama kategori galeri harus berupa teks.',
            'name.max'      => 'Nama kategori galeri maksimal 255 karakter.',
            'name.unique'   => 'Nama kategori galeri sudah digunakan.',
        ];
    }
}
