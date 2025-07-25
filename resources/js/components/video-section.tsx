import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Autoplay from 'embla-carousel-autoplay';

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

export default function VideoSection() {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <section className="relative w-full bg-gradient-to-b from-gray-900 to-black py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Title */}
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-4xl font-bold text-white">Video Pelayanan Administrasi</h2>
                    <p className="text-base text-gray-400 md:text-lg">
                        Kumpulan video mengenai prosedur dan panduan pelayanan administrasi di Ditintelkam Polda Kalimantan Barat.
                    </p>
                </div>

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
                            <CarouselItem key={video.id} className="basis-full p-2 sm:basis-1/2 lg:basis-1/3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="group relative flex h-72 cursor-pointer flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                                            {/* Thumbnail */}
                                            <img src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt={video.title} />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                                <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-sm font-medium text-white shadow transition hover:scale-105">
                                                    Putar Video
                                                </button>
                                            </div>
                                            {/* Title */}
                                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium text-white">
                                                {video.title}
                                            </div>
                                        </div>
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
                    <CarouselPrevious className="-left-4 hidden bg-gray-800/70 text-white hover:bg-gray-700 sm:flex" />
                    <CarouselNext className="-right-4 hidden bg-gray-800/70 text-white hover:bg-gray-700 sm:flex" />
                </Carousel>
            </div>
        </section>
    );
}
