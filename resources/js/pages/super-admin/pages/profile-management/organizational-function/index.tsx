import SuperAdminLayout from '@/layouts/super-admin';
import { OrganizationalFunction } from '@/models/profile-management/organizational-function';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import OrganizationalFunctionTable from './partials/table';
import { columns } from './partials/table/columns';

interface OrganizationalFunctionPageProps {
    organizationalFunctions: OrganizationalFunction[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Profil',
        href: '#',
    },
    {
        title: 'Fungsi',
        href: '/admin/profile-management/organizational-function',
    },
];

export default function OrganizationalFunctionPage({ organizationalFunctions }: OrganizationalFunctionPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Fungsi" />
            <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Fungsi</h2>
                    <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola fungsi yang dimiliki oleh organisasi</p>
                </div>
                <ButtonPartials />
            </div>

            <div className="p-4">
                <OrganizationalFunctionTable data={organizationalFunctions} columns={columns} />
            </div>
        </SuperAdminLayout>
    );
}
