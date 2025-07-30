<?php

namespace App\Http\Requests;

use App\Enums\GalleryStatusEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class GalleryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'gallery_category_id' => 'sometimes|required|exists:gallery_categories,id',
            'status' => ['sometimes', 'required', new Enum(GalleryStatusEnum::class)],
            'image' => 'sometimes|nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul galeri wajib diisi.',
            'title.string'   => 'Judul galeri harus berupa teks.',
            'title.max'      => 'Judul galeri maksimal 255 karakter.',

            'gallery_category_id.required' => 'Kategori galeri wajib dipilih.',
            'gallery_category_id.exists'   => 'Kategori galeri yang dipilih tidak valid.',

            'status.required' => 'Status galeri wajib dipilih.',
            'status.enum'     => 'Status galeri yang dipilih tidak valid.',

            'image.image'    => 'File yang diunggah harus berupa gambar.',
            'image.mimes'    => 'Format gambar harus berupa jpg, jpeg, png, atau webp.',
            'image.max'      => 'Ukuran gambar maksimal 2MB.',
        ];
    }
}
