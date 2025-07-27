import NavbarV3 from '@/components/navbar/navbar3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Visi() {
    const visi = `Terwujudnya pelayanan keamanan dan ketertiban masyarakat yang prima,
  tegaknya hukum dan keamanan dalam negeri yang mantap serta terjalinnya sinergi polisional yang proaktif.`;

    const misiItems = [
        'Melaksanakan deteksi dini dan peringatan dini melalui kegiatan/operasi penyelidikan, pengamanan dan penggalangan;',
        'Memberikan perlindungan, pengayoman dan pelayanan secara mudah, responsif dan tidak diskriminatif;',
        'Menjaga keamanan, ketertiban dan kelancaran lalu lintas untuk menjamin keselamatan dan kelancaran arus orang dan barang;',
        'Menjamin keberhasilan penanggulangan gangguan keamanan dalam negeri;',
        'Mengembangkan perpolisian masyarakat yang berbasis pada masyarakat patuh hukum;',
        'Menegakkan hukum secara profesional, objektif, proporsional, transparan dan akuntabel untuk menjamin kepastian hukum dan rasa keadilan;',
        'Mengelola secara profesional, transparan, akuntabel dan modern seluruh sumber daya Polri guna mendukung operasional tugas Polri;',
        'Membangun sistem sinergi polisional interdepartemen dan lembaga internasional maupun komponen masyarakat dalam rangka membangun kemitraan dan jejaring kerja.',
    ];

    return (
        <>
            <NavbarV3 />
            <section className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
                {/* Hero Section */}
                <div className="relative py-20 text-center">
                    {/* Neon Glow Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25),transparent_70%)]" />
                    <div className="relative mx-auto max-w-4xl px-6">
                        <h1 className="mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase md:text-6xl">
                            Visi & Misi
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Mewujudkan pelayanan publik yang futuristik, efisien, dan transparan dengan teknologi mutakhir.
                        </p>
                    </div>
                </div>

                {/* Visi Card */}
                <div className="mx-auto mt-20 max-w-5xl px-6 pb-12">
                    <Card className="relative overflow-hidden border border-cyan-500/30 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
                        <CardHeader>
                            <CardTitle className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent">
                                Visi
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-relaxed text-gray-200">{visi}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Misi Card */}
                <div className="mx-auto max-w-5xl px-6 pb-24">
                    <Card className="relative overflow-hidden border border-purple-500/30 bg-white/5 backdrop-blur-xl transition hover:border-purple-400 hover:shadow-[0_0_25px_rgba(192,132,252,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
                        <CardHeader>
                            <CardTitle className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-center text-3xl font-bold text-transparent">
                                Misi
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-inside list-decimal space-y-2 text-gray-200">
                                {misiItems.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
}
