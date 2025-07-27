import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
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

export default function NewsV3() {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'none' | 'asc' | 'desc'>('none');

    const categories = ['Semua', 'Pelayanan', 'Inovasi', 'Sosialisasi', 'Event'];

    // Filter & Sort Data
    const filteredNews = newsItems
        .filter((news) => {
            const categoryMatch = selectedCategory === 'Semua' || news.category === selectedCategory;
            const searchMatch = news.title.toLowerCase().includes(searchQuery.toLowerCase());
            return categoryMatch && searchMatch;
        })
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.views - b.views;
            if (sortOrder === 'desc') return b.views - a.views;
            return 0;
        });

    // Ambil berita paling populer untuk highlight
    const popularNews = [...newsItems].sort((a, b) => b.views - a.views)[0];

    return (
        <>
            <NavbarV3 />
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
                        {/* Highlight Berita Populer */}
                        <div className="mb-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative overflow-hidden rounded-xl shadow-none"
                            >
                                <img
                                    src={popularNews.image}
                                    alt={popularNews.title}
                                    className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                                    <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium">
                                        {popularNews.category}
                                    </span>
                                    <h3 className="text-2xl font-bold">{popularNews.title}</h3>
                                    <p className="mt-2 text-sm text-gray-200">{popularNews.description}</p>
                                    <div className="mt-3 flex items-center gap-4 text-xs text-gray-300">
                                        <span>{popularNews.date}</span>
                                        <span className="flex items-center gap-1">
                                            <Icon icon="mdi:eye-outline" className="h-4 w-4" />
                                            {popularNews.views} views
                                        </span>
                                    </div>
                                    <Link
                                        href={`/berita/${popularNews.id}`}
                                        className="mt-5 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        Baca Selengkapnya
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

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
                                    <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
                                        <SelectTrigger className="w-full rounded-md border-gray-300 bg-white/80 py-5 shadow-none dark:border-gray-700 dark:bg-gray-900/50">
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((cat) => (
                                                <SelectItem key={cat} value={cat} className="cursor-pointer p-4">
                                                    {cat}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    {/* Sort berdasarkan views */}
                                    <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as 'none' | 'asc' | 'desc')}>
                                        <SelectTrigger className="w-full rounded-md border-gray-300 bg-white/80 py-5 shadow-none dark:border-gray-700 dark:bg-gray-900/50">
                                            <SelectValue placeholder="Urutkan Berdasarkan Views" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none" className="cursor-pointer p-4">
                                                Tanpa Urutan
                                            </SelectItem>
                                            <SelectItem value="desc" className="cursor-pointer p-4">
                                                Paling Banyak Dilihat
                                            </SelectItem>
                                            <SelectItem value="asc" className="cursor-pointer p-4">
                                                Paling Sedikit Dilihat
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </CardContent>
                            </Card>

                            {/* Konten Berita */}
                            <div className="space-y-8 md:col-span-3">
                                {/* List Berita */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {filteredNews.map((news, index) => (
                                        <motion.div
                                            key={news.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 transition dark:border-gray-700"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={news.image}
                                                    alt={news.title}
                                                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                                                    <Icon icon="mdi:eye-outline" className="h-3 w-3" />
                                                    {news.views}
                                                </div>
                                                {/* Badge kategori animasi */}
                                                <span className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-none">
                                                    {news.category}
                                                </span>
                                            </div>
                                            <div className="bg-white p-3 dark:bg-gray-900">
                                                <Link href={`/berita/${news.id}`} className="block">
                                                    <h4 className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">{news.title}</h4>
                                                </Link>
                                                <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{news.date}</span>
                                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{news.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </section>

            <Footer />
        </>
    );
}
