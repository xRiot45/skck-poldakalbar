import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Video } from '@/models/video-management/video';
import { getEmbedUrl } from '@/utils/get-embed-url';
import { Icon } from '@iconify/react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface VideoSectionProps {
    videos: Video[];
}

export default function VideoSection({ videos }: VideoSectionProps) {
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    return (
        <section className="relative w-full py-20 transition-colors duration-300 dark:bg-gray-900/90">
            <div className="mx-auto max-w-7xl px-4">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Video Edukasi</span> & Panduan
                    </h2>
                    <p className="text-base text-muted-foreground md:text-lg">
                        Pelajari prosedur pelayanan administrasi kepolisian secara visual dan mendetail.
                    </p>
                </motion.div>

                {/* Layout: Featured video + list */}
                <div className="grid grid-cols-1 gap-0 space-y-4 md:space-y-0 lg:grid-cols-3 lg:gap-6">
                    {/* Featured Video */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.div
                                key={selectedVideo.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative col-span-2 cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-none"
                            >
                                {/* Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${selectedVideo.youtube_video_id}/maxresdefault.jpg`}
                                    alt={selectedVideo.title}
                                    className="h-full w-full object-cover"
                                />

                                {/* Gradient overlay hitam di bawah */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/90 to-transparent" />

                                {/* Content di atas gradient */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <Badge className="mb-2 rounded-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                        {selectedVideo.video_category?.name}
                                    </Badge>
                                    <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-lg">{selectedVideo.title}</h3>
                                    <p className="mb-3 line-clamp-2 text-sm text-gray-200">{selectedVideo.description}</p>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center text-sm text-gray-300">
                                            <Icon icon="mdi:clock-outline" className="mr-1 h-4 w-4" />
                                            {selectedVideo.duration}
                                        </span>
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Klik untuk memutar</span>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogTrigger>

                        <DialogContent className="overflow-hidden bg-black p-0 sm:max-w-7xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    src={getEmbedUrl(selectedVideo.youtube_url, selectedVideo.youtube_video_id)}
                                    title={selectedVideo.title}
                                    className="h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Video List */}
                    <div className="flex flex-col gap-4">
                        {videos.slice(0, 4).map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setSelectedVideo(video)}
                                className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border p-3 transition-colors ${
                                    selectedVideo.id === video.id ? 'border-cyan-500 bg-cyan-500/10' : 'hover:border-border hover:bg-muted/40'
                                }`}
                            >
                                {/* Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtube_video_id}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="h-20 w-32 flex-shrink-0 rounded-md object-cover"
                                />

                                {/* Text (biar full isi sisa ruang) */}
                                <div className="flex flex-1 flex-col">
                                    <h4 className="mb-2 text-sm font-semibold text-foreground">{video.title}</h4>
                                    <span className="flex text-xs text-muted-foreground">
                                        <Icon icon="mdi:clock-outline" className="mr-1 h-4 w-4" />
                                        {video.duration}
                                    </span>
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA Button */}
                        <a href="https://www.youtube.com/@SKCKPoldaKalbar">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="mt-4 w-full cursor-pointer rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3 text-sm font-medium text-white shadow-none transition-colors hover:from-blue-600 hover:to-cyan-600"
                            >
                                <Icon icon="mdi:youtube" className="mr-2 inline h-4 w-4" />
                                Lihat Semua Video di YouTube
                            </motion.button>
                        </a>
                    </div>
                </div>

                {/* Carousel Highlight */}
                <div className="mt-16">
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground">Video Lainnya</h3>
                        <span className="text-sm text-muted-foreground md:text-base">Lihat koleksi video lainnya untuk menambah wawasan Anda.</span>
                    </div>
                    <Carousel className="mx-auto w-full" opts={{ align: 'start', loop: true }} plugins={[plugin.current]}>
                        <CarouselContent>
                            {videos.map((video) => (
                                <CarouselItem key={video.id} className="basis-full p-3 sm:basis-1/2 lg:basis-1/4">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="group relative h-48 cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-none"
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtube_video_id}/hqdefault.jpg`}
                                                    alt={video.title}
                                                    className="h-full w-full object-cover" // Full cover div
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                                    <Icon icon="mdi:play-circle" className="h-12 w-12 text-white drop-shadow-md" />
                                                </div>
                                            </motion.div>
                                        </DialogTrigger>
                                        <DialogContent className="overflow-hidden bg-black p-0 sm:max-w-5xl">
                                            <div className="aspect-video w-full">
                                                <iframe
                                                    src={getEmbedUrl(video.youtube_url, video.youtube_video_id)}
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
                        <CarouselPrevious className="-left-4 hidden bg-muted-foreground/40 text-white hover:bg-muted-foreground sm:flex" />
                        <CarouselNext className="-right-4 hidden bg-muted-foreground/40 text-white hover:bg-muted-foreground sm:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
