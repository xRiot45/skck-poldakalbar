import ShareModal from '@/components/share-modal';
import { Button } from '@/components/ui/button';
import UserLayout from '@/layouts/user';
import { News } from '@/models/news-management/news';
import { formatDate } from '@/utils/format-date';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface NewsDetailProps {
    news: News;
}

export default function NewsDetail({ news }: NewsDetailProps) {
    return (
        <UserLayout>
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
            <main className="mt-10 bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
                <div className="mx-auto max-w-5xl">
                    {/* Thumbnail Header */}
                    {news?.thumbnail && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-full w-full overflow-hidden"
                        >
                            <img src={news.thumbnail} alt={news.title} className="h-full w-full object-cover" />
                        </motion.div>
                    )}

                    {/* Content Container */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-8 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl"
                        >
                            {news?.title}
                        </motion.h1>

                        {/* Meta Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                        >
                            {/* Category */}
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                {news?.news_category?.name || 'Tanpa Kategori'}
                            </span>

                            {/* Date */}
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar" className="h-4 w-4" />
                                <span>{formatDate(news?.created_at)}</span>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="prose max-w-none py-8 text-justify text-lg leading-relaxed prose-gray dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: news?.content || '' }}
                        />

                        {/* Action Buttons */}
                        <div className="mt-8 mb-12 flex justify-between">
                            <Button
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 rounded-full border border-gray-300 bg-transparent px-5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                                <Icon icon="mdi:arrow-left" className="h-4 w-4" />
                                Kembali
                            </Button>

                            <ShareModal news={news} />
                        </div>
                    </div>
                </div>
            </main>
        </UserLayout>
    );
}
