import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Clock, FileText, ShieldCheck, Users } from 'lucide-react';
import ProsedurSKCKModal from '../prosedur-skck-modal';

export default function HeroSectionV3() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video or Image */}
            <div className="absolute inset-0 z-10">
                <img
                    src="https://images.unsplash.com/photo-1558395716-1a5c0e41ee9e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Background Hero"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
                {/* Sub Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md"
                >
                    <Icon icon="mdi:check-circle" className="mr-2 h-4 w-4 text-green-400" />
                    Layanan Resmi & Modern
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl"
                >
                    Pelayanan Administrasi Ditintelkam Polda Kalbar
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-6 max-w-3xl text-base text-gray-200 md:text-lg"
                >
                    Layanan <strong>Surat Keterangan Catatan Kepolisian (SKCK)</strong> untuk kebutuhan administrasi, seperti pekerjaan, pendidikan,
                    dan perjalanan luar negeri, tersedia secara online maupun langsung.
                </motion.p>

                {/* Highlight Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-4 md:text-base"
                >
                    <div className="flex flex-col items-center">
                        <Clock className="mb-2 h-7 w-7 text-blue-400" />
                        <span>Proses Cepat</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FileText className="mb-2 h-7 w-7 text-green-400" />
                        <span>Resmi & Terverifikasi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="mb-2 h-7 w-7 text-yellow-400" />
                        <span>Aman & Terlindungi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="mb-2 h-7 w-7 text-purple-400" />
                        <span>Ribuan Pemohon Puas</span>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-12 flex gap-4"
                >
                    {/* Tombol Lihat Prosedur */}
                    {/* <Button
                        size="lg"
                        variant="default"
                        className="flex cursor-pointer items-center gap-2 bg-blue-500 py-6 text-white transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        <Icon icon="mdi:file-document-outline" className="h-5 w-5" />
                        Lihat Prosedur SKCK
                    </Button> */}
                    <ProsedurSKCKModal />

                    {/* Tombol Hubungi Kami */}
                    <a href="https://wa.me/6281347786363" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex cursor-pointer items-center gap-2 border-gray-300 py-6 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                        >
                            <Icon icon="mdi:whatsapp" className="h-5 w-5 text-green-600" />
                            Hubungi Kami
                        </Button>
                    </a>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="mt-14 grid max-w-2xl grid-cols-3 gap-6"
                >
                    <div>
                        <p className="text-3xl font-bold">+8.000</p>
                        <p className="text-sm text-gray-300">SKCK Terbit / Tahun</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">10 Menit</p>
                        <p className="text-sm text-gray-300">Rata-rata Waktu Proses</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">99%</p>
                        <p className="text-sm text-gray-300">Kepuasan Pemohon</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
