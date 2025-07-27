import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

const galleryItems = [
    {
        id: 1,
        title: 'Pelayanan SKCK Online',
        desc: 'Layanan cepat untuk pembuatan SKCK online.',
        image: 'https://images.unsplash.com/photo-1550000472-ed8dbdc1a1b6?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0',
        category: 'pelayanan',
    },
    {
        id: 2,
        title: 'Pelayanan Izin Keramaian',
        desc: 'Proses perizinan acara keramaian kini lebih mudah.',
        image: 'https://images.unsplash.com/photo-1517913451214-e22ce660e086?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0',
        category: 'pelayanan',
    },
    {
        id: 3,
        title: 'Proses Administrasi Intelijen',
        desc: 'Administrasi intelijen yang transparan & profesional.',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
        category: 'pelayanan',
    },
    {
        id: 4,
        title: 'Ruang Pelayanan Publik',
        desc: 'Fasilitas ruang publik nyaman & modern.',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
        category: 'fasilitas',
    },
    {
        id: 5,
        title: 'Inovasi Layanan Ditintelkam',
        desc: 'Berbagai inovasi baru untuk layanan masyarakat.',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
        category: 'pelayanan',
    },
    {
        id: 6,
        title: 'Pelayanan Prima untuk Masyarakat',
        desc: 'Komitmen memberikan pelayanan prima kepada warga.',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0',
        category: 'fasilitas',
    },
];

const filters = [
    { id: 'all', label: 'Semua', icon: 'solar:gallery-wide-bold-duotone' },
    { id: 'pelayanan', label: 'Pelayanan', icon: 'solar:hand-heart-bold-duotone' },
    { id: 'fasilitas', label: 'Fasilitas', icon: 'solar:buildings-3-bold-duotone' },
];

export default function Gallery() {
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = React.useState<string | null>(null);
    const [selectedDesc, setSelectedDesc] = React.useState<string | null>(null);
    const [activeFilter, setActiveFilter] = React.useState('all');

    const filteredItems = activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

    const handleOpenModal = (image: string, title: string, desc: string) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        setSelectedDesc(desc);
        setOpen(true);
    };

    return (
        <>
            <NavbarV3 />
            <section className="dark:bg-gray-900/90">
                {/* Banner */}
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
                            Galeri Ditintelkam
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                        >
                            Jelajahi berbagai momen penting dan inovasi layanan dari Ditintelkam Polda Kalbar.
                        </motion.p>
                    </div>
                </div>

                {/* Layout: Sidebar + Galeri */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-12 md:grid-cols-4">
                    {/* Sidebar Filter */}
                    <div className="space-y-4 md:col-span-1">
                        {filters.map((filter, index) => (
                            <motion.div
                                key={filter.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 shadow-none transition-all duration-300 ${
                                    activeFilter === filter.id
                                        ? 'hover:to-cyan-600" flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-white transition-all hover:bg-gradient-to-r hover:from-blue-600'
                                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                                }`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                <Icon icon={filter.icon} className="text-xl" />
                                <span className="font-medium">{filter.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Galeri Masonry */}
                    <div className="md:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFilter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="columns-1 gap-3 space-y-3 sm:columns-2 md:columns-2 lg:columns-3"
                            >
                                {filteredItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative mb-3 cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-white shadow-none dark:bg-gray-800"
                                        onClick={() => handleOpenModal(item.image, item.title, item.desc)}
                                    >
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-200">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Modal */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="relative overflow-hidden rounded-3xl shadow-2xl"
                        >
                            <img src={selectedImage || ''} alt={selectedTitle || ''} className="h-auto max-h-[80vh] w-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h2 className="text-2xl font-bold text-white">{selectedTitle}</h2>
                                <p className="text-gray-200">{selectedDesc}</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                            >
                                <Icon icon="mdi:close" className="text-xl" />
                            </button>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            </section>
            <Footer />
        </>
    );
}
