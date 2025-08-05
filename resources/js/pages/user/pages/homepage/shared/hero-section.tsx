import Banner from '@/assets/images/banner.png';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Clock, FileText, ShieldCheck, Users } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden py-16 md:py-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img src={Banner} alt="Background Hero" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 text-center text-white md:px-6">
                {/* Sub Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md md:px-4 md:py-2 md:text-sm"
                >
                    <Icon icon="mdi:check-circle" className="mr-2 h-4 w-4 text-green-400" />
                    Layanan Resmi & Modern
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:mt-4 md:text-6xl"
                >
                    Pelayanan Administrasi <br /> Ditintelkam Polda Kalbar
                </motion.h1>

                {/* Service Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-6 grid w-full max-w-sm gap-3 sm:max-w-md sm:grid-cols-2 md:max-w-2xl md:grid-cols-3 md:gap-4"
                >
                    <Link href="/skck">
                        <div className="group flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/50">
                            <Icon icon="mdi:file-document-outline" className="mb-2 h-6 w-6 text-white group-hover:animate-bounce" />
                            <span className="text-sm font-semibold text-white">SKCK</span>
                        </div>
                    </Link>

                    <Link href="/izin-keramaian">
                        <div className="group flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-500 p-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-rose-400/50">
                            <Icon icon="mdi:account-group-outline" className="mb-2 h-6 w-6 text-white group-hover:animate-bounce" />
                            <span className="text-sm font-semibold text-white">Izin Keramaian</span>
                        </div>
                    </Link>

                    <Link href="/sendak">
                        <div className="group flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 p-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-amber-400/50">
                            <Icon icon="mdi:account-badge-outline" className="mb-2 h-6 w-6 text-white group-hover:animate-bounce" />
                            <span className="text-sm font-semibold text-white">Sendak</span>
                        </div>
                    </Link>
                </motion.div>

                {/* Highlight Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-8 grid grid-cols-2 gap-6 text-xs sm:text-sm md:grid-cols-4 md:gap-8 md:text-base"
                >
                    <div className="flex flex-col items-center">
                        <Clock className="mb-2 h-6 w-6 text-blue-400 md:h-7 md:w-7" />
                        <span>Proses Cepat</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FileText className="mb-2 h-6 w-6 text-green-400 md:h-7 md:w-7" />
                        <span>Resmi & Terverifikasi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="mb-2 h-6 w-6 text-yellow-400 md:h-7 md:w-7" />
                        <span>Aman & Terlindungi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="mb-2 h-6 w-6 text-purple-400 md:h-7 md:w-7" />
                        <span>Ribuan Pemohon Puas</span>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
                >
                    <a href="https://wa.me/6281347786363" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex w-full items-center justify-center gap-2 border-gray-300 py-6 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                        >
                            <Icon icon="mdi:whatsapp" className="h-5 w-5 text-green-600" />
                            Hubungi Kami Di WhatsApp
                        </Button>
                    </a>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="mt-10 grid grid-cols-3 gap-4 text-xs sm:text-sm md:mt-14 md:gap-6 md:text-base"
                >
                    <div>
                        <p className="text-xl font-bold sm:text-2xl md:text-3xl">+8.000</p>
                        <p className="text-gray-300">SKCK / Tahun</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold sm:text-2xl md:text-3xl">10 Menit</p>
                        <p className="text-gray-300">Rata-rata Proses</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold sm:text-2xl md:text-3xl">99%</p>
                        <p className="text-gray-300">Kepuasan Pemohon</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
