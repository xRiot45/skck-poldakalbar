import BannerSkck from '@/assets/images/banners/banner-2.png';
import NavbarV3 from '@/components/navbar/navbar3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function SkckV2() {
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
            <section className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100">
                {/* Banner Section */}
                <div className="relative">
                    <img src={BannerSkck} alt="Banner SKCK" className="h-[320px] w-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-extrabold uppercase md:text-6xl"
                        >
                            Mekanisme & Prosedur SKCK
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-3 text-lg text-gray-200"
                        >
                            Berdasarkan Peraturan Kepolisian Nomor 6 Tahun 2023
                        </motion.p>
                    </div>
                </div>

                {/* Persyaratan */}
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="overflow-hidden border border-gray-200 bg-white shadow-xl">
                            <CardHeader className="bg-gradient-to-r from-sky-500 to-blue-600 p-6">
                                <CardTitle className="text-3xl font-bold text-white">Persyaratan yang Diperlukan</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="list-inside list-decimal space-y-3 text-gray-700">
                                    {persyaratan.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-2"
                                        >
                                            <Icon icon="mdi:check-circle" className="mt-1 text-sky-500" width={20} />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Info Biaya */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-6 text-center text-white shadow-lg"
                >
                    <p className="text-xl font-semibold">Biaya penerbitan: Rp 30.000,- (Sesuai PP No 76 Tahun 2020)</p>
                </motion.div>
            </section>
        </>
    );
}
