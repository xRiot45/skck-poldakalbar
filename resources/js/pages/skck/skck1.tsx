import BannerSkck from '@/assets/images/banners/banner-2.png';
import NavbarV3 from '@/components/navbar/navbar3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SkckV1() {
    const persyaratan = [
        'Mendaftar online melalui Super Apps Polri',
        'Fotokopi KTP (Kartu Tanda Penduduk): Satu lembar fotokopi KTP.',
        'Fotokopi Kartu Keluarga (KK): Satu lembar fotokopi KK.',
        'Fotokopi Akta Lahir/Surat Kenal Lahir/Ijazah: Satu lembar fotokopi dokumen pilihan.',
        'Pas Foto: 5 lembar pas foto berwarna ukuran 4x6 dengan latar belakang merah.',
        'Tanda bukti status kepesertaan aktif dalam program JKN (Jaminan Kesehatan Nasional/BPJS).',
    ];

    return (
        <>
            <NavbarV3 />
            <section className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
                {/* Banner */}
                <div className="relative py-20 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25),transparent_70%)]" />
                    <div className="relative mx-auto max-w-4xl px-6">
                        <h1 className="mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase">
                            Mekanisme & Prosedur Penerbitan SKCK
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">Berdasarkan Peraturan Kepolisian (Perpol) Nomor 6 Tahun 2023</p>
                    </div>
                </div>

                <div className="mx-auto sm:max-w-7xl">
                    <img src={BannerSkck} alt="Banner SKCK" className="w-full object-cover" />
                </div>

                {/* Persyaratan Section */}
                <div className="mx-auto max-w-5xl px-6 py-16">
                    <Card className="relative overflow-hidden border border-cyan-500/30 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
                        <CardHeader>
                            <CardTitle className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                                Persyaratan yang Diperlukan
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-inside list-decimal space-y-3 leading-relaxed text-gray-200">
                                {persyaratan.map((item, idx) => (
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
