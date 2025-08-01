import SuperAdminLayout from '@/layouts/super-admin';
import { News } from '@/models/news-management/news';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import NewsTable from './partials/table';
import { columns } from './partials/table/columns';

interface NewsPageProps {
    news: News[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Berita',
        href: '#',
    },
    {
        title: 'Berita',
        href: '/admin/news-management/news',
    },
];

export default function NewsPage({ news }: NewsPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Kategori Galeri" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar berita</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola berita yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <NewsTable data={news} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
