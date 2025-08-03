import SuperAdminLayout from '@/layouts/super-admin';
import { ContactForm } from '@/models/contact-management/contact-form';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import ContactsFormTable from './partials/table';
import { columns } from './partials/table/columns';

interface ContactFormPageProps {
    contactForms: ContactForm[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Kontak',
        href: '#',
    },
    {
        title: 'Form Kontak',
        href: '/super-admin/contact-management/contacts-form',
    },
];

export default function ContactFormPage({ contactForms }: ContactFormPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Form Kontak" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Masukkan</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola masukkan yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <ContactsFormTable data={contactForms} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
