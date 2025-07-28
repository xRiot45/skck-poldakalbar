import AdminLayout from '@/layouts/admin';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/super-admin/dashboard',
    },
];

export default function DashboardSuperAdmin() {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <main className="p-6">
                <h1>Dashboard Admin</h1>
            </main>
        </AdminLayout>
    );
}
