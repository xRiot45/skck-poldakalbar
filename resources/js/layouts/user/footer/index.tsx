import LogoIcon from '@/assets/images/logo_1.png';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { FOOTER_CONTACT, FOOTER_MENU, FOOTER_SOCIALS } from './nav-items';

const Footer = () => {
    return (
        <footer className="border-t border-gray-700 bg-gray-900 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-4">
                {/* Logo & Deskripsi */}
                <div className="space-y-4">
                    <img src={LogoIcon} alt="Logo Diintelkam" className="h-16" />
                    <p className="text-sm leading-relaxed text-gray-400">
                        Pelayanan Administrasi Ditintelkam Polda Kalbar meliputi penerbitan SKCK, Izin Keramaian, dan Rekomendasi Sendak.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                        {FOOTER_SOCIALS.map((social) => (
                            <Link key={social.label} href={social.href} target="_blank" aria-label={social.label}>
                                <Icon icon={social.icon} className="h-5 w-5 transition hover:text-primary" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Menu Kategori */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:col-span-2">
                    {FOOTER_MENU.map((category) => (
                        <div key={category.title}>
                            <h3 className="mb-3 text-lg font-semibold">{category.title}</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {category.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="transition-colors hover:text-primary">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Kontak + Lokasi */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Kontak Kami</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {FOOTER_CONTACT.map((item) => (
                            <li key={item.label}>
                                <span className="block">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Direktorat Intelkam Polda Kalimantan Barat. Semua Hak Dilindungi.
            </div>
        </footer>
    );
};

export default Footer;
