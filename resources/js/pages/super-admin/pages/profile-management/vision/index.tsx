import SuperAdminLayout from '@/layouts/super-admin';
import { Vision } from '@/models/profile-management/vision';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import VisionTable from './partials/table';
import { columns } from './partials/table/columns';

interface VisionPageProps {
    visions: Vision[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Profil',
        href: '#',
    },
    {
        title: 'Visi',
        href: '/admin/profile-management/vision',
    },
];

export default function VisionPage({ visions }: VisionPageProps) {
    return (
        <>
            <SuperAdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Visi" />
                <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Role / Peran</h2>
                        <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola role / peran untuk mengatur hak akses user</p>
                    </div>
                    <ButtonPartials />
                </div>

                <div className="p-4">
                    <VisionTable data={visions} columns={columns} />
                </div>
            </SuperAdminLayout>
        </>
    );
}
