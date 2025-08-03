import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Gallery } from '@/models/gallery-management/gallery';
import { GalleryCategory } from '@/models/gallery-management/gallery-category';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryPageProps {
    galleries: Gallery[];
    galleryCategory: GalleryCategory[];
}

export default function GalleryPage({ galleries, galleryCategory }: GalleryPageProps) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    // Gunakan null untuk 'semua'
    const [activeFilter, setActiveFilter] = useState<number | null>(null);

    // Filter pakai gallery_category_id karena data yang dikirim bukan object gallery_category
    const filteredItems = activeFilter === null ? galleries : galleries.filter((item) => item.gallery_category_id === activeFilter);

    const handleOpenModal = (image: string, title: string) => {
        setSelectedImage(image);
        setSelectedTitle(title);
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
                        {/* Tombol Semua */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 }}
                            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 shadow-none transition-all duration-300 ${
                                activeFilter === null
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-white hover:from-blue-600'
                                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                            }`}
                            onClick={() => setActiveFilter(null)}
                        >
                            <span className="font-medium">Semua</span>
                        </motion.div>

                        {galleryCategory.map((filter, index) => (
                            <motion.div
                                key={filter.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index + 1) * 0.05 }}
                                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 shadow-none transition-all duration-300 ${
                                    activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-white hover:from-blue-600'
                                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                                }`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                <span className="font-medium">{filter.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Galeri Masonry */}
                    <div className="md:col-span-3">
                        <AnimatePresence mode="wait">
                            {filteredItems.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex h-64 items-center justify-center text-gray-500 dark:text-gray-400"
                                >
                                    Galeri tidak ada
                                </motion.div>
                            ) : (
                                <motion.div className="columns-1 gap-3 space-y-3 sm:columns-2 md:columns-2 lg:columns-3">
                                    {filteredItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl shadow-lg"
                                            onClick={() => handleOpenModal(item.image, item.title)}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {/* Gambar */}
                                            <motion.img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                            />

                                            {/* Overlay + Title */}
                                            <motion.div
                                                className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                            >
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileHover={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-full p-6 text-start text-sm font-medium text-white"
                                                >
                                                    {item.title}
                                                </motion.p>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
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
                                <h2 className="text-xl font-bold text-white">{selectedTitle}</h2>
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
