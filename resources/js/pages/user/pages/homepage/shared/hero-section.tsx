import Banner from '@/assets/images/banner.png';
import Banner1 from '@/assets/images/banners/skck/banner-1.png';
import Banner2 from '@/assets/images/banners/skck/banner-2.png';
import Banner3 from '@/assets/images/banners/skck/banner-3.png';
import Banner4 from '@/assets/images/banners/skck/banner-4.png';
import Banner5 from '@/assets/images/banners/skck/banner-5.png';
import Banner6 from '@/assets/images/banners/skck/banner-6.png';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Clock, FileText, ShieldCheck, Users } from 'lucide-react';
import { useRef } from 'react';

const prosedurImages = [
    {
        image: Banner1,
    },
    {
        image: Banner2,
    },
    {
        image: Banner3,
    },
    {
        image: Banner4,
    },
    {
        image: Banner5,
    },
    {
        image: Banner6,
    },
];

export default function HeroSection() {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <section className="relative min-h-screen w-full overflow-hidden py-16 md:py-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img src={Banner} alt="Background Hero" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 text-center text-white md:px-6">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:mt-4 md:text-6xl"
                >
                    Pelayanan Administrasi <br /> Ditintelkam Polda Kalbar
                </motion.h1>

                <Carousel className="mx-auto mt-20 w-full max-w-screen-xl" plugins={[plugin.current]}>
                    <CarouselContent>
                        {prosedurImages.map((banner, index) => (
                            <CarouselItem key={index} className="w-full sm:basis-1/2 lg:basis-1/3">
                                <div className={`relative flex h-72 w-full flex-col justify-between overflow-hidden rounded-2xl p-6 text-white`}>
                                    <img src={banner.image} alt="food" className="absolute top-0 left-0 h-full w-full object-cover" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>

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

                <div className="relative mt-10 overflow-hidden bg-transparent py-2 whitespace-nowrap">
                    <motion.div
                        className="inline-block text-2xl font-bold text-white"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: 'linear',
                        }}
                    >
                        <span className="mx-10">
                            PELAYANAN ADMINISTRASI DIREKTORAT INTELIJEN KEAMANAN POLDA KALBAR DOWNLOAD APLIKASI POLRI PRESISI UNTUK MENDAFTAR SKCK
                            SECARA ONLINE
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
