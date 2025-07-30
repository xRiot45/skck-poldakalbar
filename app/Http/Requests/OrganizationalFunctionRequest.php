<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrganizationalFunctionRequest extends FormRequest
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
            'title.required' => 'Judul fungsi tidak boleh kosong',
            'title.string' => 'Judul fungsi harus berupa string',
        ];
    }
}
