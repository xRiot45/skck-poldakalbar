import NavbarV2 from '@/components/navbar/navbar2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function ProfilV2() {
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
            <NavbarV2 />
            <section className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
                {/* Hero Section */}
                <div className="relative py-20 text-center">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25),transparent_70%)]" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto max-w-4xl px-6"
                    >
                        <h1 className="mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase">
                            Ditintelkam Polda Kalbar
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Direktorat Intelijen Keamanan yang selanjutnya disebut Ditintelkam adalah unsur pelaksana tugas pokok dalam bidang
                            intelijen keamanan pada tingkat Polda yang berada di bawah Kapolda.
                        </p>
                    </motion.div>
                </div>

                {/* Section Cards */}
                <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-2">
                    {/* Card Tugas */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.3}>
                        <Card className="group relative overflow-hidden border border-purple-500/30 bg-white/5 backdrop-blur-xl transition hover:border-purple-400 hover:shadow-[0_0_35px_rgba(192,132,252,0.4)]">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
                            <CardHeader className="flex items-center gap-3">
                                <Icon icon="mdi:target" className="h-8 w-8 text-purple-400" />
                                <CardTitle className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent">
                                    Tugas
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-disc space-y-3 text-gray-200">
                                    {tugas.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true }}
                                            custom={idx / 8}
                                            className="transition hover:text-purple-300"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Card Fungsi */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}>
                        <Card className="group relative overflow-hidden border border-blue-500/30 bg-white/5 backdrop-blur-xl transition hover:border-blue-400 hover:shadow-[0_0_35px_rgba(96,165,250,0.4)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
                            <CardHeader className="flex items-center gap-3">
                                <Icon icon="mdi:function-variant" className="h-8 w-8 text-cyan-400" />
                                <CardTitle className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                                    Fungsi
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-disc space-y-3 text-gray-200">
                                    {fungsi.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true }}
                                            custom={idx / 8}
                                            className="transition hover:text-cyan-300"
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
        </>
    );
}
