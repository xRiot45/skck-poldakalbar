import SuperAdminLayout from '@/layouts/super-admin';
import { NewsCategory } from '@/models/news-management/news-category';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import NewsCategoryTable from './partials/table';
import { columns } from './partials/table/columns';

interface NewsCategoriesPageProps {
    newsCategories: NewsCategory[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Berita',
        href: '#',
    },
    {
        title: 'Kategori Berita',
        href: '/admin/news-management/news-categories',
    },
];

export default function NewsCategoriesPage({ newsCategories }: NewsCategoriesPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Kategori Galeri" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Kategori berita</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola kategori berita yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <NewsCategoryTable data={newsCategories} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
