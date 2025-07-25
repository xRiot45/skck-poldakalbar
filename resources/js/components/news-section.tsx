import { Card, CardContent } from '@/components/ui/card';

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

export default function NewsSection() {
    return (
        <section className="relative w-full bg-white py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Title */}
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-4xl font-bold text-black">Berita Terbaru</h2>
                    <p className="text-base text-gray-400 md:text-lg">
                        Update informasi terbaru seputar pelayanan administrasi Ditintelkam Polda Kalbar.
                    </p>
                </div>

                {/* Grid Berita */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {newsItems.map((news) => (
                        <Card key={news.id} className="group overflow-hidden rounded-xl p-0 shadow-none transition hover:shadow-lg">
                            {/* Gambar */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay tanggal */}
                                <div className="absolute top-2 left-2 rounded bg-black/60 px-3 py-1 text-xs text-white">{news.date}</div>
                            </div>

                            {/* Konten */}
                            <CardContent className="p-4">
                                <h3 className="mb-2 text-lg font-semibold text-black">{news.title}</h3>
                                <p className="text-sm text-gray-400">{news.description}</p>

                                <a href={news.link} className="mt-3 inline-block text-sm font-medium text-black hover:underline">
                                    Baca Selengkapnya →
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
