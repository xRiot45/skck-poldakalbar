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
            {
                title: 'Permissions / Izin',
                href: '/super-admin/access-control-management/permissions',
                icon: 'material-symbols:security',
            },
            {
                title: 'Kelola Izin Peran',
                href: '/super-admin/access-control-management/manage-role-permissions',
                icon: 'material-symbols:manage-accounts-outline-rounded',
            },
        ],
    },
    {
        group: 'MANAJEMEN PROFIL',
        items: [
            {
                title: 'Visi dan Misi',
                href: '/super-admin/manajemen-profil/vision-mission',
                icon: 'material-symbols:public',
            },
            {
                title: 'Tugas dan Fungsi',
                href: '/super-admin/manajemen-profil/tasks-functions',
                icon: 'material-symbols:assignment',
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
                href: '/super-admin/manajemen-galeri/gallery-categories',
                icon: 'material-symbols:category',
            },
            {
                title: 'Galeri',
                href: '/super-admin/manajemen-galeri/gallery',
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
