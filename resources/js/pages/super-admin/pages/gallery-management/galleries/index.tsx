import SuperAdminLayout from '@/layouts/super-admin';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Galeri',
        href: '#',
    },
    {
        title: 'Galeri',
        href: '/admin/profile-management/galleries',
    },
];

export default function GalleriesPage() {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Galeri" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Galeri</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola galeri yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>
        </SuperAdminLayout>
    );
}
