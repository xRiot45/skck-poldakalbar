<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VisionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul visi tidak boleh kosong',
            'title.string' => 'Judul visi harus berupa string',
        ];
    }
}
