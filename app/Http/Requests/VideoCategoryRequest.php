<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoCategoryRequest extends FormRequest
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
                'unique:video_categories,name,' . $this->route('video_category'),
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama kategori video wajib diisi.',
            'name.string'   => 'Nama kategori video harus berupa teks.',
            'name.max'      => 'Nama kategori video maksimal 255 karakter.',
            'name.unique'   => 'Nama kategori video sudah digunakan.',
        ];
    }
}
