import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react'; // Jika kamu pakai Iconify

const services = [
    {
        title: 'SKCK',
        desc: 'Pembuatan Surat Keterangan Catatan Kepolisian secara online dengan proses cepat dan aman.',
        icon: 'fxemoji:note',
    },
    {
        title: 'Izin Keramaian',
        desc: 'Pengajuan izin keramaian publik modern berbasis digital dengan monitoring real-time.',
        icon: 'noto:party-popper',
    },
    {
        title: 'Sendak',
        desc: 'Informasi lengkap mengenai Direktorat Intelijen Keamanan Polda Kalbar dan layanan yang tersedia.',
        icon: 'mdi:gun',
    },
];

export default function ServiceSectionV1() {
    return (
        <section className="relative my-12 w-full bg-white">
            <div className="mx-auto max-w-7xl px-6 text-center">
                {/* Title */}
                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Layanan Unggulan Kami</h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-lg">
                    Modern, transparan, dan terintegrasi berbasis digital untuk mendukung kebutuhan administrasi masyarakat Kalimantan Barat.
                </p>

                {/* Service Cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {services.map((service, idx) => (
                        <Card
                            key={idx}
                            className={cn(
                                'group relative overflow-hidden border border-gray-200 bg-white shadow-none transition-all hover:scale-[1.03] hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]',
                            )}
                        >
                            {/* Glow Border Animation */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <CardHeader className="relative flex flex-col items-center p-6 text-center">
                                {/* Icon */}
                                <Icon
                                    icon={service.icon}
                                    className="mb-6 text-6xl text-gray-400 transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Title */}
                                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>

                                {/* Description */}
                                <CardDescription className="mt-2 text-sm text-gray-600">{service.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
