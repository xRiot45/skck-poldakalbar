import SuperAdminLayout from '@/layouts/super-admin';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/super-admin/dashboard',
    },
];

export default function DashboardSuperAdmin() {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <main className="p-6">
                <h1>Dashboard Admin</h1>
            </main>
        </SuperAdminLayout>
    );
}
