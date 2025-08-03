import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Gallery } from '@/models/gallery-management/gallery';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface GallerySectionProps {
    galleries: Gallery[];
}

export default function GallerySection({ galleries }: GallerySectionProps) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    const handleOpenModal = (image: string, title: string) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        setOpen(true);
    };

    return (
        <section className="relative w-full bg-white py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 text-4xl font-extrabold text-gray-900 dark:text-white"
                    >
                        Galeri <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Pelayanan Baintelkam</span>
                    </motion.h2>
                    <p className="text-base text-gray-500 md:text-lg dark:text-gray-400">
                        Dokumentasi kegiatan, fasilitas, dan inovasi pelayanan Ditintelkam Polda Kalimantan Barat.
                    </p>
                </div>

                {/* Masonry Gallery */}
                <div className="columns-1 gap-3 space-y-3 sm:columns-2 md:columns-2 lg:columns-3">
                    {galleries.map((item, index) => (
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
                            {/* Gambar dengan motion */}
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
                </div>

                {/* Tombol Lihat Semua */}
                <div className="mt-10 text-center">
                    <Link href="/galeri">
                        <Button className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-5 text-white hover:from-blue-600 hover:to-cyan-600">
                            <Icon icon="mdi:image-multiple-outline" className="mr-2 h-5 w-5" />
                            Lihat Semua Galeri
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Modal Shadcn */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full overflow-hidden rounded-2xl"
                    >
                        <img src={selectedImage || ''} alt={selectedTitle || ''} className="w-full rounded-2xl object-cover" />
                        {selectedTitle && (
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                                <p className="text-lg font-semibold text-white">{selectedTitle}</p>
                            </div>
                        )}
                    </motion.div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
