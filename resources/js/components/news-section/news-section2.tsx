import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const newsItems = [
    {
        id: 1,
        title: 'Pelayanan SKCK Online Mempermudah Masyarakat',
        description: 'Polda Kalbar menghadirkan layanan SKCK online untuk mempermudah proses administrasi tanpa antrian panjang.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
        date: '25 Juli 2025',
        link: '#',
    },
    {
        id: 2,
        title: 'Ditintelkam Luncurkan Inovasi Layanan Digital',
        description: 'Pelayanan berbasis teknologi membantu masyarakat memperoleh informasi perizinan secara cepat dan transparan.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
        date: '20 Juli 2025',
        link: '#',
    },
    {
        id: 3,
        title: 'Sosialisasi Izin Keramaian di Kabupaten',
        description: 'Petugas Ditintelkam memberikan penyuluhan kepada masyarakat terkait prosedur perizinan keramaian.',
        image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1200&auto=format&fit=crop',
        date: '18 Juli 2025',
        link: '#',
    },
];

export default function NewsSectionV2() {
    return (
        <section className="relative w-full bg-white py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
                    >
                        Berita <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Terbaru</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-3 text-base text-gray-500 md:text-lg dark:text-gray-400"
                    >
                        Update informasi terbaru seputar pelayanan administrasi Ditintelkam Polda Kalbar.
                    </motion.p>
                </div>

                {/* Grid News */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {newsItems.map((news, index) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Date Badge */}
                                    <div className="absolute top-3 left-3 rounded-md bg-black/60 px-3 py-1 text-xs font-medium text-white">
                                        {news.date}
                                    </div>
                                </div>

                                {/* Content */}
                                <CardContent className="flex flex-col p-5">
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{news.title}</h3>
                                    <p className="flex-grow text-sm text-gray-600 dark:text-gray-400">{news.description}</p>
                                    <Button
                                        variant="ghost"
                                        className="mt-4 flex items-center gap-2 p-0 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                        asChild
                                    >
                                        <a href={news.link}>
                                            <span>Baca Selengkapnya</span>
                                            <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
