import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const newsItems = [
    {
        id: 1,
        title: 'Pelayanan SKCK Online Mempermudah Masyarakat',
        description: 'Polda Kalbar menghadirkan layanan SKCK online untuk mempermudah proses administrasi tanpa antrian panjang.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
        date: '25 Juli 2025',
        category: 'Pelayanan',
        views: 1240,
    },
    {
        id: 2,
        title: 'Ditintelkam Luncurkan Inovasi Layanan Digital',
        description: 'Pelayanan berbasis teknologi membantu masyarakat memperoleh informasi perizinan secara cepat dan transparan.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
        date: '20 Juli 2025',
        category: 'Inovasi',
        views: 980,
    },
    {
        id: 3,
        title: 'Sosialisasi Izin Keramaian di Kabupaten',
        description: 'Petugas Ditintelkam memberikan penyuluhan kepada masyarakat terkait prosedur perizinan keramaian.',
        image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1200&auto=format&fit=crop',
        date: '18 Juli 2025',
        category: 'Sosialisasi',
        views: 765,
    },
    {
        id: 4,
        title: 'Perizinan Acara Musik Outdoor Resmi Diluncurkan',
        description: 'Sistem digital terbaru untuk perizinan acara musik luar ruangan kini tersedia.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
        date: '10 Juli 2025',
        category: 'Event',
        views: 640,
    },
    {
        id: 5,
        title: 'Perizinan Acara Musik Outdoor Resmi Diluncurkan',
        description: 'Sistem digital terbaru untuk perizinan acara musik luar ruangan kini tersedia.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
        date: '10 Juli 2025',
        category: 'Event',
        views: 640,
    },
];

export default function NewsSectionV3() {
    const [highlight, setHighlight] = useState(newsItems[0]);

    return (
        <AnimatePresence>
            <motion.section
                key="news-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full overflow-hidden py-20 dark:bg-gray-900"
            >
                {/* Background Gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4),transparent_70%)]"
                />

                <div className="mx-auto max-w-7xl px-4 text-center">
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white"
                    >
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Berita</span> Terbaru
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mb-12 text-lg text-gray-600 dark:text-gray-400"
                    >
                        Update informasi terbaru seputar pelayanan administrasi Ditintelkam Polda Kalbar.
                    </motion.p>

                    {/* Highlight News */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={highlight.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="relative mx-auto max-w-7xl overflow-hidden rounded-xl shadow-none"
                        >
                            <img
                                src={highlight.image}
                                alt={highlight.title}
                                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            {/* Content */}
                            <div className="absolute right-0 bottom-0 left-0 p-8 text-left text-white">
                                <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium">{highlight.category}</span>
                                <h3 className="text-3xl font-bold">{highlight.title}</h3>
                                <p className="mt-2 text-sm text-gray-200">{highlight.description}</p>
                                <div className="mt-4 flex items-center gap-4 text-xs text-gray-300">
                                    <span>{highlight.date}</span>
                                    <span className="flex items-center gap-1">
                                        <Icon icon="mdi:eye-outline" className="h-4 w-4" />
                                        {highlight.views} views
                                    </span>
                                </div>
                                <Button className="mt-5 bg-blue-600 hover:bg-blue-700">Baca Selengkapnya</Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Thumbnail */}
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="mt-4 w-full"
                    >
                        <CarouselContent>
                            {newsItems.map((news, index) => (
                                <CarouselItem key={news.id} className="basis-1/2 cursor-pointer md:basis-1/4" onClick={() => setHighlight(news)}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className={`relative h-full overflow-hidden rounded-xl border transition ${
                                            highlight.id === news.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 dark:border-gray-700'
                                        }`}
                                    >
                                        {/* Gambar */}
                                        <div className="relative">
                                            <img src={news.image} alt={news.title} className="h-40 w-full object-cover" />
                                            {/* Overlay views */}
                                            <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                                                <Icon icon="mdi:eye-outline" className="h-3 w-3" />
                                                {news.views}
                                            </div>
                                        </div>

                                        {/* Konten */}
                                        <div className="bg-white p-3 text-left dark:bg-gray-900">
                                            <h4 className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">{news.title}</h4>
                                            <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{news.date}</span>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </motion.section>
        </AnimatePresence>
    );
}
