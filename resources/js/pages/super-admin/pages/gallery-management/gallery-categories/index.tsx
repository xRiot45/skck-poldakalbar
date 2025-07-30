import SuperAdminLayout from '@/layouts/super-admin';
import { BreadcrumbItem } from '@/types';

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

export default function GalleryCategoriesPage() {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <h1>Galleri kategori</h1>
        </SuperAdminLayout>
    );
}
