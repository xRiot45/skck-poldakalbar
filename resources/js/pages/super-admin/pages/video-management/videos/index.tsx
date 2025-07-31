import SuperAdminLayout from '@/layouts/super-admin';
import { Video } from '@/models/video-management/video';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import VideoTable from './partials/table';
import { columns } from './partials/table/columns';

interface VideoPageProps {
    videos: Video[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Video',
        href: '#',
    },
    {
        title: 'Video',
        href: '/admin/profile-management/videos',
    },
];

export default function VideosPage({ videos }: VideoPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Video" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Video</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola video yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <VideoTable data={videos} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
