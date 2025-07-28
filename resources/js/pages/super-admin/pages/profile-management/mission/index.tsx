import SuperAdminLayout from '@/layouts/super-admin';
import { Mission } from '@/models/profile-management/mission';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import MissionTable from './partials/table';
import { columns } from './partials/table/columns';

interface MissionPageProps {
    missions: Mission[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Profil',
        href: '#',
    },
    {
        title: 'Misi',
        href: '/admin/profile-management/mission',
    },
];

export default function MissionPage({ missions }: MissionPageProps) {
    return (
        <>
            <SuperAdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Visi" />
                <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Misi</h2>
                        <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola misi yang dimiliki oleh organisasi</p>
                    </div>
                    <ButtonPartials />
                </div>

                <div className="p-4">
                    <MissionTable data={missions} columns={columns} />
                </div>
            </SuperAdminLayout>
        </>
    );
}
