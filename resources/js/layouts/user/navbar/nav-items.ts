interface NavbarItem {
    label: string;
    href?: string;
    icon?: string;
    children?: NavbarItem[];
}

export const NAVBAR_ITEMS: NavbarItem[] = [
    {
        label: 'Beranda',
        href: '/',
        icon: 'material-symbols:home',
    },
    {
        label: 'Profil',
        icon: 'iconamoon:profile',
        children: [
            { label: 'Profil', href: '/profil' },
            { label: 'Visi & Misi', href: '/visi-misi' },
        ],
    },
    {
        label: 'Layanan',
        icon: 'mdi:tools',
        children: [
            { label: 'SKCK', href: '/skck' },
            { label: 'Izin Keramaian', href: '/izin-keramaian' },
            { label: 'Sendak', href: '/sendak' },
        ],
    },
    {
        label: 'Berita',
        href: '/berita',
        icon: 'mdi:newspaper-variant-outline',
    },
    {
        label: 'Kontak',
        href: '/kontak',
        icon: 'mdi:phone',
    },
];
