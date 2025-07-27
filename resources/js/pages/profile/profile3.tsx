import LogoIcon from '@/assets/images/logo_1.png';
import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function ProfilV3Plus() {
    const tugas = [
        'Melakukan deteksi aksi intelijen berupa deteksi dini, peringatan dini dan/atau cegah dini dengan didukung teknologi intelijen dan persandian;',
        'Memberikan pelayanan administrasi dan pengawasan senjata api atau bahan peledak, orang asing, dan kegiatan sosial atau politik masyarakat sesuai ketentuan peraturan perundang-undangan;',
        'Mengumpulkan, mengolah dan mendokumentasikan data serta menyajikan informasi kepada pimpinan, satuan fungsi kepolisian dan instansi terkait.',
    ];

    const fungsi = [
        'Penyusunan rencana kerja dan anggaran, pengelolaan dan pembinaan manajemen personel dan logistik, administrasi dan ketatausahaan, serta pengelolaan keuangan;',
        'Penyelidikan intelijen terhadap potensi gangguan, ambang gangguan dan/atau gangguan nyata;',
        'Pengamanan intelijen terhadap kegiatan, bahan keterangan, personel dan/atau materiil;',
        'Penggalangan intelijen terhadap individu dan/atau kelompok;',
        'Penganalisaan terhadap bahan keterangan dan perkembangan situasi untuk memperkirakan kadar ancaman dalam bentuk produk intelijen dan literatur;',
        'Pemberian bantuan teknologi dan persandian kepada satuan fungsi kepolisian dalam memelihara keamanan dan ketertiban masyarakat;',
        'Pelayanan masyarakat meliputi penerimaan pemberitahuan dan pemberian ijin kegiatan masyarakat, Surat Keterangan Catatan Kepolisian (SKCK), administrasi pengawasan orang asing serta administrasi senjata api dan bahan peledak.',
    ];

    return (
        <>
            <NavbarV3 />

            <section className="bg-white text-gray-900 dark:bg-gray-900/90 dark:text-white">
                {/* HERO - Banner Tetap Gelap */}
                <div className="relative overflow-hidden bg-gray-950 text-white">
                    {/* Neon Glow Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.3),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.3),transparent_70%)]" />

                    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-24 md:flex-row">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl text-center md:text-left"
                        >
                            <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase">
                                Ditintelkam Polda Kalbar
                            </h1>
                            <p className="mt-6 text-lg text-gray-300">
                                Direktorat Intelijen Keamanan adalah unsur pelaksana tugas pokok dalam bidang intelijen keamanan pada tingkat Polda
                                yang berada di bawah Kapolda.
                            </p>
                        </motion.div>

                        {/* Icon Shield */}
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                            <img src={LogoIcon} alt="logo Icon" className="h-64" />
                        </motion.div>
                    </div>
                </div>

                {/* Tugas & Fungsi */}
                <div className="mx-auto mt-12 max-w-7xl space-y-8 px-6 pb-24">
                    {/* Tugas */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <Card className="relative overflow-hidden border-none bg-white shadow-none transition dark:border-gray-800 dark:bg-gray-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/5 to-pink-700/5 dark:from-purple-700/10 dark:to-pink-700/10" />
                            <CardHeader className="flex items-center gap-3">
                                <Icon icon="mdi:target" className="h-8 w-8 text-purple-500" />
                                <CardTitle className="text-3xl font-bold">Tugas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-disc space-y-3 text-gray-700 dark:text-gray-300">
                                    {tugas.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                                            className="transition hover:text-purple-500"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Fungsi */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <Card className="relative overflow-hidden border-none bg-white shadow-none transition dark:border-gray-800 dark:bg-gray-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-cyan-700/5 dark:from-blue-700/10 dark:to-cyan-700/10" />
                            <CardHeader className="flex items-center gap-3">
                                <Icon icon="mdi:function-variant" className="h-8 w-8 text-cyan-500" />
                                <CardTitle className="text-3xl font-bold">Fungsi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-disc space-y-3 text-gray-700 dark:text-gray-300">
                                    {fungsi.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                                            className="transition hover:text-cyan-500"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
