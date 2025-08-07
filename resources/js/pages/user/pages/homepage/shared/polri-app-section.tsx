import PhoneMockup from '@/assets/images/mockup.png';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function PolriAppSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-16 md:py-24 lg:px-24">
            {/* Decorative Gradient Bubbles */}
            <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-300 opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-indigo-200 opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-10 h-60 w-60 rounded-full bg-cyan-300 opacity-20 blur-2xl" />

            <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 sm:max-w-7xl lg:flex-row">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="z-10 text-center lg:text-left"
                >
                    <h2 className="text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl">
                        Layanan Polisi <br /> Dalam Genggaman Anda
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 md:text-xl">
                        Akses cepat layanan dan informasi kepolisian hanya dengan satu aplikasi:{' '}
                        <span className="font-semibold">POLRI Super App</span>.
                    </p>

                    {/* Additional Content */}
                    {/* <div className="mt-8 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
                        <div className="flex items-start gap-4">
                            <Icon icon="material-symbols:verified-user" className="h-6 w-6 text-indigo-600" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Autentikasi Aman</h4>
                                <p className="text-sm text-gray-600">Data Anda dilindungi dengan sistem keamanan terpercaya milik POLRI.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Icon icon="mdi:car-info" className="h-6 w-6 text-indigo-600" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Informasi Kendaraan</h4>
                                <p className="text-sm text-gray-600">Cek data kendaraan bermotor, pajak, STNK, dan status tilang secara langsung.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Icon icon="mdi:police-badge" className="h-6 w-6 text-indigo-600" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Layanan Kepolisian Lengkap</h4>
                                <p className="text-sm text-gray-600">Mulai dari SKCK, SIM, laporan SPKT, hingga pelaporan DUMAS tersedia.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Icon icon="mdi:map-marker-radius" className="h-6 w-6 text-indigo-600" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Lokasi Rawan Kriminal</h4>
                                <p className="text-sm text-gray-600">Temukan area rawan kejahatan dan cegah potensi bahaya lebih dini.</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a href="https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi">
                            <Button size="lg" className="w-44 gap-2 bg-black py-7 text-lg text-white hover:bg-gray-900">
                                <Icon icon="logos:google-play-icon" className="h-5 w-5" />
                                Google Play
                            </Button>
                        </a>
                        <a href="https://apps.apple.com/id/app/polri-presisi/id1617509708?l=id">
                            <Button size="lg" className="w-44 gap-2 bg-black py-7 text-lg text-white hover:bg-gray-900">
                                <Icon icon="mingcute:appstore-fill" className="h-5 w-5" />
                                App Store
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Phone Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="z-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
                >
                    <img src={PhoneMockup} alt="POLRI App Interface" className="w-full drop-shadow-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
