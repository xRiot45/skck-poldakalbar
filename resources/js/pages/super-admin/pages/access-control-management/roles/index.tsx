import SuperAdminLayout from '@/layouts/super-admin';
import { Role } from '@/models/access-control-management/role';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ButtonPartials from './partials/buttons';
import RoleTable from './partials/table';
import { columns } from './partials/table/columns';

interface RolePageProps {
    roles: Role[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Kontrol Akses',
        href: '#',
    },
    {
        title: 'Roles / Peran',
        href: '/admin/manajemen-kontrol-akses/roles',
    },
];

export default function RolePage({ roles }: RolePageProps) {
    return (
        <>
            <SuperAdminLayout breadcrumbs={breadcrumbs}>
                <Head title="Roles / Peran" />
                <div className="mb-2 flex flex-wrap justify-between space-y-2 p-4">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-gray-700 dark:text-gray-200">Daftar Role / Peran</h2>
                        <p className="mt-1.5 text-[14px] text-muted-foreground">Kelola role / peran untuk mengatur hak akses user</p>
                    </div>
                    <ButtonPartials />
                </div>

                <div className="p-4">
                    <RoleTable data={roles} columns={columns} />
                </div>
            </SuperAdminLayout>
        </>
    );
}
