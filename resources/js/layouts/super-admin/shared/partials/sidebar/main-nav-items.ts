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
                href: '/super-admin/access-control-management/roles',
                icon: 'eos-icons:role-binding',
            },
            // {
            //     title: 'Permissions / Izin',
            //     href: '/super-admin/access-control-management/permissions',
            //     icon: 'material-symbols:security',
            // },
            // {
            //     title: 'Kelola Izin Peran',
            //     href: '/super-admin/access-control-management/manage-role-permissions',
            //     icon: 'material-symbols:manage-accounts-outline-rounded',
            // },
        ],
    },
    {
        group: 'MANAJEMEN PROFIL',
        items: [
            {
                title: 'Visi',
                href: '/super-admin/profile-management/vision',
                icon: 'material-symbols:public',
            },
            {
                title: 'Misi',
                href: '/super-admin/profile-management/mission',
                icon: 'material-symbols:flag',
            },
            {
                title: 'Tugas',
                href: '/super-admin/profile-management/task',
                icon: 'material-symbols:assignment',
            },
            {
                title: 'Fungsi',
                href: '/super-admin/profile-management/organizational-function',
                icon: 'material-symbols:build',
            },
        ],
    },
    {
        group: 'MANAJEMEN BERITA',
        items: [
            {
                title: 'Kategori Berita',
                href: '/super-admin/manajemen-berita/news-categories',
                icon: 'material-symbols:category',
            },
            {
                title: 'Berita',
                href: '/super-admin/manajemen-berita/news',
                icon: 'material-symbols:article',
            },
        ],
    },
    {
        group: 'MANAJEMEN GALERI',
        items: [
            {
                title: 'Kategori Galeri',
                href: '/super-admin/gallery-management/gallery-categories',
                icon: 'material-symbols:category',
            },
            {
                title: 'Galeri',
                href: '/super-admin/gallery-management/gallery',
                icon: 'material-symbols:photo-library',
            },
        ],
    },
    {
        group: 'MANAJEMEN VIDEO',
        items: [
            {
                title: 'Kategori Video',
                href: '/super-admin/manajemen-video/video-categories',
                icon: 'material-symbols:category',
            },
            {
                title: 'Video',
                href: '/super-admin/manajemen-video/videos',
                icon: 'material-symbols:video-library',
            },
        ],
    },
    {
        group: 'PENGATURAN WEBSITE',
        items: [
            {
                title: 'Pengaturan Kontak',
                href: '/super-admin/pengaturan-website/contact-settings',
                icon: 'material-symbols:contact-page',
            },
            {
                title: 'Pengaturan Media Sosial',
                href: '/super-admin/pengaturan-website/social-media-settings',
                icon: 'material-symbols:share',
            },
        ],
    },
];

export default mainNavItems;
