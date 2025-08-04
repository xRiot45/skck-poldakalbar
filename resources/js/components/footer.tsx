import LogoIcon from '@/assets/images/logo_1.png';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';

export function Footer() {
    return (
        <footer className="border-t bg-gray-900 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
                {/* Logo & Deskripsi */}
                <div className="space-y-4">
                    <img src={LogoIcon} alt="Logo Diintelkam" className="h-16" />
                    <p className="text-sm text-gray-400">
                        Pelayanan Administrasi Ditintelkam Polda Kalbar Yang Meliputi penerbitan SKCK, Izin Keramaian, dan Rekomendasi Sendak.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <Link href="https://www.instagram.com/skckpoldakalbar/" target="_blank">
                            <Icon icon="akar-icons:instagram-fill" className="h-5 w-5 transition hover:text-primary" />
                        </Link>
                        <Link href="https://wa.me/6281347786363" target="_blank">
                            <Icon icon="akar-icons:whatsapp-fill" className="h-5 w-5 transition hover:text-primary" />
                        </Link>
                        <Link href="https://web.facebook.com/profile.php?id=61551044680803" target="_blank">
                            <Icon icon="akar-icons:facebook-fill" className="h-5 w-5 transition hover:text-primary" />
                        </Link>
                        <Link href="https://www.youtube.com/@SKCKPoldaKalbar" target="_blank">
                            <Icon icon="akar-icons:youtube-fill" className="h-5 w-5 transition hover:text-primary" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold">Menu</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>
                            <Link href="/" className="hover:underline">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href="/profil" className="hover:underline">
                                Profil
                            </Link>
                        </li>
                        <li>
                            <Link href="/layanan" className="hover:underline">
                                Layanan
                            </Link>
                        </li>
                        <li>
                            <Link href="/berita" className="hover:underline">
                                Berita
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontak" className="hover:underline">
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Kontak */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold">Kontak Kami</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>
                            <span className="block">Jl. Jenderal Ahmad Yani No. 1, Pontianak, Kalimantan Barat</span>
                        </li>
                        <li>
                            <span className="block">Telepon: (0561) 123456</span>
                        </li>
                        <li>
                            <span className="block">Email: intelkam@poldakalbar.go.id</span>
                        </li>
                        <li>
                            <span className="block">Jam Operasional: Senin - Jumat, 08.00 - 16.00 WIB</span>
                        </li>
                    </ul>
                </div>

                {/* Google Maps */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold">Lokasi</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.400781682443!2d109.35753647498281!3d-0.06734073550857453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59003c758035%3A0xf43632e20d038796!2sPolda%20Kalimantan%20Barat!5e1!3m2!1sid!2sid!4v1753624573263!5m2!1sid!2sid"
                        width="100%"
                        height="180"
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg border border-gray-700"
                    ></iframe>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Direktorat Intelkam Polda Kalimantan Barat. Semua Hak Dilindungi.
            </div>
        </footer>
    );
}
