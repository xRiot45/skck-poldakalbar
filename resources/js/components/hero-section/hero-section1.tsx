import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import Banner1 from '@/assets/images/banners/banner-1.png';
import Banner2 from '@/assets/images/banners/banner-2.png';
import Banner3 from '@/assets/images/banners/banner-3.png';
import Banner4 from '@/assets/images/banners/banner-4.png';
import Banner5 from '@/assets/images/banners/banner-5.png';
import Banner6 from '@/assets/images/banners/banner-6.png';

const banners = [{ image: Banner1 }, { image: Banner2 }, { image: Banner3 }, { image: Banner4 }, { image: Banner5 }, { image: Banner6 }];

export default function HeroSectionV1() {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 transition-colors duration-500 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/40 dark:from-black/50 dark:to-black/50" />

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-6xl px-6 pt-32 pb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white"
                >
                    Pelayanan Administrasi <br /> Ditintelkam Polda Kalbar
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-4 text-base text-gray-600 md:text-lg dark:text-gray-300"
                >
                    Solusi cepat dan mudah untuk pelayanan administrasi Anda.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <Button
                        size="lg"
                        variant="default"
                        className="cursor-pointer border border-gray-200 bg-white text-gray-900 transition-all hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                        Pelajari Lebih Lanjut ↓
                    </Button>
                </motion.div>
            </div>

            {/* Carousel Modern */}
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
