export const galleryItems = [
    {
        id: 1,
        title: 'Pelayanan SKCK Online',
        image: 'https://images.unsplash.com/photo-1550000472-ed8dbdc1a1b6?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        title: 'Pelayanan Izin Keramaian',
        image: 'https://images.unsplash.com/photo-1517913451214-e22ce660e086?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        title: 'Proses Administrasi Intelijen',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        title: 'Ruang Pelayanan Publik',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        title: 'Inovasi Layanan Ditintelkam',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 6,
        title: 'Pelayanan Prima untuk Masyarakat',
        image: 'https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function GallerySectionV1() {
    return (
        <section className="relative w-full bg-white py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Title */}
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-4xl font-bold text-black">Galeri Pelayanan</h2>
                    <p className="text-base text-gray-400 md:text-lg">Dokumentasi kegiatan dan pelayanan Ditintelkam Polda Kalimantan Barat.</p>
                </div>

                {/* Masonry Gallery */}
                <div className="columns-1 gap-3 space-y-3 sm:columns-2 md:columns-2 lg:columns-3">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="group relative break-inside-avoid overflow-hidden rounded-xl shadow-lg">
                            {/* Gambar */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay + Title */}
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                                <p className="w-full p-6 text-start text-sm font-medium text-white">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
