import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { News } from '@/models/news-management/news';
import { formatDate } from '@/utils/format-date';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NewsSectionProps {
    news: News[];
}

export default function NewsSection({ news }: NewsSectionProps) {
    const [highlight, setHighlight] = useState<News | null>(null);

    useEffect(() => {
        if (news && news.length > 0) {
            const highlightNews = news.find((item) => item.is_highlight) || news[0];
            setHighlight(highlightNews);
        } else {
            setHighlight(null);
        }
    }, [news]);

    // Fallback jika tidak ada data
    if (!news || news.length === 0) {
        return (
            <section className="relative w-full overflow-hidden py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Berita</span> Terbaru
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Belum ada berita yang tersedia saat ini.</p>
                </div>
            </section>
        );
    }

    if (!highlight) {
        return null; // Atau tampilkan skeleton loading
    }

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
                                src={highlight?.thumbnail ?? ''}
                                alt={highlight?.title ?? ''}
                                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            {/* Content */}
                            <div className="absolute right-0 bottom-0 left-0 p-8 text-left text-white">
                                <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium">
                                    {highlight.news_category?.name}
                                </span>
                                <h3 className="text-3xl font-bold">{highlight.title}</h3>
                                <div className="mt-4 flex items-center gap-4 text-xs text-gray-300">
                                    <span>{formatDate(highlight.created_at)}</span>
                                </div>

                                <Link href={`/berita/${highlight.slug}`}>
                                    <Button className="mt-5 bg-blue-600 hover:bg-blue-700">Baca Selengkapnya</Button>
                                </Link>
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
                            {news.map((item, index) => (
                                <CarouselItem
                                    key={item.id}
                                    className="basis-1/2 cursor-pointer md:basis-1/4"
                                    onClick={() => setHighlight(item)} // ubah highlight saat thumbnail diklik
                                >
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 text-start transition dark:border-gray-700"
                                    >
                                        <div className="relative">
                                            <img
                                                src={item.thumbnail ?? ''}
                                                alt={item.title}
                                                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <span className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-md">
                                                {item.news_category?.name}
                                            </span>
                                        </div>
                                        <div className="bg-white p-3 dark:bg-gray-900">
                                            <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{formatDate(item.created_at)}</span>
                                            <Link href={`/berita/${item.slug}`} className="mt-2 block">
                                                <h4 className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                            </Link>
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
