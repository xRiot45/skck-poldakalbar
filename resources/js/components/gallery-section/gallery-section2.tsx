import { Card } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const galleryItems = [
    {
        id: 1,
        title: 'Pelayanan SKCK Online',
        image: 'https://images.unsplash.com/photo-1550000472-ed8dbdc1a1b6?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        id: 2,
        title: 'Pelayanan Izin Keramaian',
        image: 'https://images.unsplash.com/photo-1517913451214-e22ce660e086?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        id: 3,
        title: 'Proses Administrasi Intelijen',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        id: 4,
        title: 'Ruang Pelayanan Publik',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        id: 5,
        title: 'Inovasi Layanan Ditintelkam',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        id: 6,
        title: 'Pelayanan Prima untuk Masyarakat',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
];

export default function GallerySectionV2() {
    return (
        <section className="relative w-full bg-white py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4">
                {/* Title */}
                <div className="mb-12 text-center">
                    <h2 className="mb-3 text-4xl font-extrabold text-gray-900 dark:text-white">
                        Galeri <span className="text-blue-500">Pelayanan</span>
                    </h2>
                    <p className="text-base text-gray-500 md:text-lg dark:text-gray-400">
                        Dokumentasi kegiatan dan pelayanan Ditintelkam Polda Kalimantan Barat.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-md">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay & Title */}
                                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="p-4 text-center">
                                        <motion.h3
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-lg font-semibold text-white"
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <Icon icon="mdi:eye-outline" className="mt-2 text-2xl text-white opacity-80 group-hover:opacity-100" />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
