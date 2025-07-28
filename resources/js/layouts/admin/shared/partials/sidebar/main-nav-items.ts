import { NavGroup } from '@/types';

const mainNavItems: NavGroup[] = [
    {
        group: 'DASHBOARD',
        items: [
            {
                title: 'Dashboard',
                href: '/super-admin/dashboard',
                icon: 'material-symbols:dashboard',
            },
        ],
    },
    {
        group: 'MANAJEMEN KONTROL AKSES',
        items: [
            {
                title: 'Roles / Peran',
                href: '/super-admin/manajemen-kontrol-akses/roles',
                icon: 'eos-icons:role-binding',
            },
            {
                title: 'Permissions / Izin',
                href: '/super-admin/manajemen-kontrol-akses/permissions',
                icon: 'material-symbols:security',
            },
            {
                title: 'Kelola Izin Peran',
                href: '/super-admin/manajemen-kontrol-akses/manage-role-permissions',
                icon: 'material-symbols:manage-accounts-outline-rounded',
            },
        ],
    },
];

export default mainNavItems;
