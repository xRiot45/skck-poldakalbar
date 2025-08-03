<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Models\ContactForm;
use Illuminate\Http\RedirectResponse;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ContactFormController extends Controller
{
    public function indexSuperAdmin(): InertiaResponse
    {
        $contactForms = ContactForm::all();
        return Inertia::render('super-admin/pages/contact-forms/index', [
            'contactForms' => $contactForms,
        ]);
    }

    public function store(ContactFormRequest $request): RedirectResponse
    {
        ContactForm::create($request->validated());
        return redirect()->route('contact')->with('success', 'Pesan berhasil dikirim!');
    }

    public function destroy(ContactForm $contactForm)
    {
        //
    }
}
