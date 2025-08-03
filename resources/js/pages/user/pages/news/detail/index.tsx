import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import { Card, CardContent } from '@/components/ui/card';
import { News } from '@/models/news-management/news';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface NewsDetailProps {
    news: News;
}

export default function NewsDetail({ news }: NewsDetailProps) {
    return (
        <>
            <NavbarV3 />

            {/* Hero Section (Gelap) */}
            <div className="relative overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.3),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.3),transparent_70%)]" />

                <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase"
                    >
                        Detail Berita
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                    >
                        Lihat dan nikmati berita terbaru Ditintelkam Polda Kalimantan Barat
                    </motion.p>
                </div>
            </div>

            {/* Body Content */}
            <main className="bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
                <div className="mx-auto max-w-5xl px-4 py-10">
                    <Card className="overflow-hidden border border-none border-gray-200 shadow-none transition-colors dark:border-gray-800 dark:bg-gray-950">
                        {/* Thumbnail di Dalam Card */}
                        {news?.thumbnail && (
                            <motion.div
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative h-60 w-full overflow-hidden sm:h-96"
                            >
                                <img
                                    src={news.thumbnail}
                                    alt={news.title}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </motion.div>
                        )}

                        <CardContent className="p-6">
                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-4 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl"
                            >
                                {news?.title}
                            </motion.h1>

                            {/* Meta Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                            >
                                <div className="flex items-center gap-2">
                                    <Icon icon="mdi:tag-outline" className="h-4 w-4" />
                                    <span>{news?.news_category?.name || 'Tanpa Kategori'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon icon="mdi:calendar" className="h-4 w-4" />
                                    <span>
                                        {new Date(news?.created_at).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Konten Berita */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="prose max-w-none prose-gray dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: news?.content || '' }}
                            />
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 rounded-full border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                            <Icon icon="mdi:arrow-left" className="h-4 w-4" />
                            Kembali
                        </button>

                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                                <Icon icon="mdi:share-variant" className="h-4 w-4" />
                                Bagikan
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
