import SuperAdminLayout from '@/layouts/super-admin';
import { GalleryCategory } from '@/models/gallery-management/gallery-category';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import GalleryCategoryTable from './partials/table';
import { columns } from './partials/table/columns';

interface GalleryCategoriesPageProps {
    galleryCategories: GalleryCategory[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Galeri',
        href: '#',
    },
    {
        title: 'Kategori Galeri',
        href: '/admin/profile-management/gallery-categories',
    },
];

export default function GalleryCategoriesPage({ galleryCategories }: GalleryCategoriesPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Kategori Galeri" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Kategori Galeri</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola kategori galeri yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <GalleryCategoryTable data={galleryCategories} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
