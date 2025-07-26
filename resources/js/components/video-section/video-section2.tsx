import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Icon } from '@iconify/react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const youtubeVideos = [
    {
        id: 1,
        title: 'Panduan Lengkap Pengurusan SKCK Online',
        videoId: 'N-t48rU0wcY',
        url: 'https://www.youtube.com/embed/N-t48rU0wcY',
    },
    {
        id: 2,
        title: 'Proses Pelayanan SKCK di Polda Kalimantan Barat',
        videoId: 'N-t48rU0wcY',
        url: 'https://www.youtube.com/embed/N-t48rU0wcY',
    },
    {
        id: 3,
        title: 'Layanan Izin Keramaian Ditintelkam Polda Kalbar',
        videoId: 'N-t48rU0wcY',
        url: 'https://www.youtube.com/embed/N-t48rU0wcY',
    },
    {
        id: 4,
        title: 'Sosialisasi Prosedur Administrasi Intelijen Kepolisian',
        videoId: 'N-t48rU0wcY',
        url: 'https://www.youtube.com/embed/N-t48rU0wcY',
    },
];

export default function VideoSectionV2() {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <section className="relative w-full overflow-hidden py-24 dark:bg-gray-900/90 dark:text-white">
            <div className="mx-auto max-w-7xl px-4">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
                        Video <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Pelayanan</span>
                    </h2>
                    <p className="text-base text-muted-foreground md:text-lg">
                        Jelajahi video panduan dan prosedur pelayanan administrasi Ditintelkam Polda Kalimantan Barat.
                    </p>
                </motion.div>

                {/* Carousel */}
                <Carousel
                    className="mx-auto w-full max-w-screen-xl"
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                >
                    <CarouselContent>
                        {youtubeVideos.map((video) => (
                            <CarouselItem key={video.id} className="basis-full p-3 sm:basis-1/2 lg:basis-1/3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="group relative flex h-72 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:shadow-xl"
                                        >
                                            {/* Thumbnail */}
                                            <img
                                                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                                alt={video.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />

                                            {/* Overlay with play icon */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                                <Icon
                                                    icon="mdi:play-circle-outline"
                                                    className="h-16 w-16 text-white drop-shadow-md transition group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Title */}
                                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium text-white">
                                                {video.title}
                                            </div>
                                        </motion.div>
                                    </DialogTrigger>

                                    {/* Modal Content */}
                                    <DialogContent className="overflow-hidden bg-black p-0 sm:max-w-5xl">
                                        <div className="aspect-video w-full">
                                            <iframe
                                                src={video.url}
                                                title={video.title}
                                                className="h-full w-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Controls */}
                    <CarouselPrevious className="-left-4 hidden bg-muted-foreground/40 text-white hover:bg-muted-foreground sm:flex" />
                    <CarouselNext className="-right-4 hidden bg-muted-foreground/40 text-white hover:bg-muted-foreground sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}
