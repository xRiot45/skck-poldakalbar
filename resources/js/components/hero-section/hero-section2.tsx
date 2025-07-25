import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Users } from 'lucide-react';
import { useRef } from 'react';

import Banner1 from '@/assets/images/banners/banner-1.png';
import Banner2 from '@/assets/images/banners/banner-2.png';
import Banner3 from '@/assets/images/banners/banner-3.png';
import Banner4 from '@/assets/images/banners/banner-4.png';
import Banner5 from '@/assets/images/banners/banner-5.png';
import Banner6 from '@/assets/images/banners/banner-6.png';

const banners = [{ image: Banner1 }, { image: Banner2 }, { image: Banner3 }, { image: Banner4 }, { image: Banner5 }, { image: Banner6 }];

export default function HeroSectionV2() {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <section className="relative w-full overflow-hidden bg-white transition-colors duration-500 dark:bg-gray-950">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1558395716-1a5c0e41ee9e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0"
                    alt="Background Hero"
                    className="h-full w-full object-cover brightness-100 transition-all duration-700 dark:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60 dark:from-black/60 dark:via-black/40 dark:to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-gray-700 shadow-md backdrop-blur-md dark:bg-gray-800/70 dark:text-gray-200"
                >
                    100% Online Service • Fast & Secure
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white"
                >
                    Pelayanan Administrasi Ditintelkam Polda Kalbar
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mx-auto mt-6 max-w-3xl text-base text-gray-700 md:text-lg dark:text-gray-300"
                >
                    Nikmati kemudahan layanan administrasi resmi Polda Kalbar secara cepat, aman, dan praktis. Dirancang untuk mempermudah kebutuhan
                    masyarakat dengan dukungan teknologi modern.
                </motion.p>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-8 flex flex-wrap justify-center gap-6 text-gray-800 dark:text-gray-300"
                >
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-green-500" /> Aman & Terpercaya
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" /> Proses Cepat
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-500" /> Ramah Pengguna
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <Button
                        size="lg"
                        variant="default"
                        className="cursor-pointer border border-gray-200 bg-white text-gray-900 transition-all hover:bg-gray-100 dark:border-gray-700 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700"
                    >
                        Pelajari Lebih Lanjut
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="cursor-pointer border-gray-300 text-gray-900 transition-all hover:bg-gray-200 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                    >
                        Hubungi Kami
                    </Button>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6 text-gray-900 dark:text-white"
                >
                    <div>
                        <p className="text-3xl font-bold">+10K</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Pengguna Terdaftar</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">24/7</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Layanan Nonstop</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">99%</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Kepuasan Pengguna</p>
                    </div>
                </motion.div>
            </div>

            {/* Carousel */}
            <Carousel className="mx-auto mb-24 w-full max-w-screen-xl px-4" plugins={[plugin.current]}>
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={index} className="w-full sm:basis-1/2 lg:basis-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="relative flex h-80 w-full flex-col justify-between overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={banner.image}
                                    alt={`banner-${index + 1}`}
                                    className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </section>
    );
}
