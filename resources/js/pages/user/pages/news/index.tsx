import NewsCard from '@/components/news-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UserLayout from '@/layouts/user';
import { News } from '@/models/news-management/news';
import { NewsCategory } from '@/models/news-management/news-category';
import { formatDate } from '@/utils/format-date';
import { Icon } from '@iconify/react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface NewsPageProps {
    news: News[];
    newsCategory: NewsCategory[];
}

export default function NewsPage({ news, newsCategory }: NewsPageProps) {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'none' | 'date-asc' | 'date-desc'>('none');

    const filteredNews = news
        .filter((item) => {
            const categoryMatch = selectedCategory === null || item.news_category_id === selectedCategory;
            const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
            return categoryMatch && searchMatch;
        })
        .sort((a, b) => {
            if (sortOrder === 'date-asc') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
            if (sortOrder === 'date-desc') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            return 0;
        });

    const highlightNews = news.filter((item) => item.is_highlight);

    return (
        <>
            <Head title="Berita" />
            <UserLayout>
                <section>
                    {/* Hero Section */}
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
                                Berita Terbaru
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                            >
                                Dapatkan informasi terkini seputar layanan, inovasi, dan kegiatan Ditintelkam Polda Kalbar.
                            </motion.p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <motion.section
                        key="news-v3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        className="relative min-h-screen w-full bg-gray-50 py-16 dark:bg-gray-900"
                    >
                        <div className="mx-auto max-w-7xl px-4">
                            {/* Highlight Berita (is_highlight) */}
                            {highlightNews.length > 0 && (
                                <div className="mb-8">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative overflow-hidden rounded-xl shadow-md"
                                    >
                                        {highlightNews.length === 1 ? (
                                            // Jika hanya 1 berita highlight
                                            <div className="relative">
                                                <img
                                                    src={highlightNews[0].thumbnail}
                                                    alt={highlightNews[0].title}
                                                    className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                                <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                                                    <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium">
                                                        {highlightNews[0].news_category?.name}
                                                    </span>
                                                    <h3 className="text-2xl font-bold">{highlightNews[0].title}</h3>
                                                    <div className="mt-3 flex items-center gap-4 text-xs text-gray-300">
                                                        <span>{formatDate(highlightNews[0].created_at)}</span>
                                                    </div>
                                                    <Link
                                                        href={`/berita/${highlightNews[0].slug}`}
                                                        className="mt-5 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                                                    >
                                                        Baca Selengkapnya
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (
                                            // Jika lebih dari 1 berita highlight (buat slider sederhana)
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                                {highlightNews.map((item, index) => (
                                                    <motion.div
                                                        key={item.id}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                                        className="relative overflow-hidden rounded-lg"
                                                    >
                                                        <img
                                                            src={item.thumbnail}
                                                            alt={item.title}
                                                            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                                        <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                                                            <span className="mb-1 inline-block rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium">
                                                                {item.news_category?.name}
                                                            </span>
                                                            <h4 className="line-clamp-2 text-lg font-bold">{item.title}</h4>
                                                            <Link
                                                                href={`/berita/${item.slug}`}
                                                                className="mt-3 inline-block text-xs text-blue-300 hover:text-blue-400"
                                                            >
                                                                Lihat Detail →
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                                {/* Sidebar Filter Modern */}
                                <Card className="h-max border bg-white/70 shadow-none backdrop-blur-md dark:bg-gray-800/70">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Filter & Pencarian</CardTitle>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Sesuaikan pencarian berita sesuai kategori atau jumlah views.
                                        </p>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {/* Search */}
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                placeholder="Cari berita..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full rounded-md border border-gray-200 bg-white/60 py-5 pl-10 text-gray-700 shadow-none backdrop-blur-md focus:border-blue-400 focus:ring-2 focus:ring-blue-400 dark:border-gray-700 dark:bg-gray-900/50 dark:text-white"
                                            />
                                            <Icon icon="mdi:magnify" className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                                        </div>

                                        {/* Filter Kategori */}
                                        <Select
                                            value={selectedCategory ? String(selectedCategory) : 'all'}
                                            onValueChange={(value) => setSelectedCategory(value === 'all' ? null : Number(value))}
                                        >
                                            <SelectTrigger className="w-full rounded-md border-gray-300 bg-white/80 py-5 shadow-none dark:border-gray-700 dark:bg-gray-900/50">
                                                <SelectValue placeholder="Pilih Kategori" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all" className="p-4">
                                                    Semua
                                                </SelectItem>
                                                {newsCategory.map((cat) => (
                                                    <SelectItem key={cat.id} value={String(cat.id)} className="cursor-pointer p-4">
                                                        {cat.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        {/* Sort berdasarkan tanggal */}
                                        <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as 'none' | 'date-asc' | 'date-desc')}>
                                            <SelectTrigger className="w-full rounded-md border-gray-300 bg-white/80 py-5 shadow-none dark:border-gray-700 dark:bg-gray-900/50">
                                                <SelectValue placeholder="Urutkan Berdasarkan Tanggal" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none" className="cursor-pointer p-4">
                                                    Tanpa Urutan
                                                </SelectItem>
                                                <SelectItem value="date-desc" className="cursor-pointer p-4">
                                                    Terbaru
                                                </SelectItem>
                                                <SelectItem value="date-asc" className="cursor-pointer p-4">
                                                    Terlama
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </CardContent>
                                </Card>

                                {/* Konten Berita */}
                                <div className="space-y-8 md:col-span-3">
                                    {/* List Berita */}
                                    {filteredNews.length === 0 ? (
                                        <p className="text-center text-gray-500 dark:text-gray-400">Tidak ada berita ditemukan.</p>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            {filteredNews.map((item, index) => (
                                                <NewsCard key={item.id} item={item} index={index} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </section>
            </UserLayout>
        </>
    );
}
