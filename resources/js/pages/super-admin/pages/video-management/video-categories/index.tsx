import SuperAdminLayout from '@/layouts/super-admin';
import { VideoCategory } from '@/models/video-management/video-category';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import VideoCategoryTable from './partials/table';
import { columns } from './partials/table/columns';

interface VideoCategoriesPageProps {
    videoCategories: VideoCategory[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Video',
        href: '#',
    },
    {
        title: 'Kategori Video',
        href: '/admin/profile-management/video-categories',
    },
];

export default function VideoCategories({ videoCategories }: VideoCategoriesPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Kategori Video" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Kategori Video</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola kategori video yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <VideoCategoryTable data={videoCategories} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
