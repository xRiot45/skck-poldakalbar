import ProsedurIzinKeramaianModal from '@/components/prosedur-izin-keramaian-modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserLayout from '@/layouts/user';
import { Icon } from '@iconify/react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

const mekanismeSteps = [
    {
        title: 'Permohonan',
        desc: `Memuat paling sedikit: Tujuan & sifat giat, tempat & waktu, jumlah peserta, penjab giat. 
    Diajukan elektronik atau langsung di loket. 
    Permohonan paling lambat:
    - 14 hari kerja skala daerah
    - 21 hari kerja skala nasional
    - 30 hari kerja skala internasional`,
        icon: 'mdi:clipboard-text',
        color: 'from-blue-400 to-cyan-500',
    },
    {
        title: 'Pencatatan',
        desc: `Dilakukan secara elektronik atau manual. Mencatat nomor urut, tanggal surat diterima, nomor & tanggal surat permohonan, nama pemohon, bentuk giat, skala giat, serta tanggal & tempat giat.`,
        icon: 'mdi:file-document-edit',
        color: 'from-purple-400 to-pink-500',
    },
    {
        title: 'Riksa ADM',
        desc: `Petugas melakukan verifikasi dokumen persyaratan administrasi. 
    Jika lengkap, diberikan tanda bukti penerimaan. Jika tidak lengkap, harus diperbaiki/dilengkapi.`,
        icon: 'mdi:magnify-scan',
        color: 'from-green-400 to-teal-500',
    },
    {
        title: 'Koordinasi',
        desc: `Dilakukan dengan internal Polri, instansi pemerintah, & pihak lain melalui rapat koordinasi, survei lokasi, dan rekomendasi (Polres untuk skala provinsi, Polda untuk skala nasional/internasional). 
    Jika ada masalah, penolakan disertai alasan.`,
        icon: 'mdi:account-group',
        color: 'from-orange-400 to-amber-500',
    },
    {
        title: 'Penerbitan',
        desc: `Penerbitan izin paling lama:
    - 4 hari kerja skala daerah
    - 7 hari kerja skala nasional
    - 14 hari kerja skala internasional`,
        icon: 'mdi:check-decagram',
        color: 'from-pink-400 to-rose-500',
    },
    {
        title: 'Penyerahan',
        desc: `Dapat diunduh via aplikasi elektronik atau diberikan setelah tanda terima. 
    Perubahan wajib diberitahukan paling lambat H-3 sebelum kegiatan.`,
        icon: 'mdi:cloud-download',
        color: 'from-cyan-400 to-blue-500',
    },
];

const persyaratanIzin = [
    'Daftar susunan panpel',
    'Persetujuan dari penjab tempat giat',
    'Rekomendasi & instansi/organisasi terkait',
    'Pernyataan tertulis penyelenggara bahwa kegiatan tidak bertentangan dengan norma agama, kesusilaan, kesopanan & ketentuan peraturan perundangan',
    'Fotokopi AD/ART jika penyelenggara organisasi',
    'Fotokopi paspor &/atau visa jika giat melibatkan orang asing',
    'Fotokopi surat kuasa bermaterai jika permohonan dikuasakan',
];

export default function IzinKeramaianPage() {
    return (
        <>
            <Head title="Layanan Izin Keramaian" />
            <UserLayout>
                <section className="bg-background text-foreground dark:bg-gray-900/90">
                    {/* HERO */}
                    <div className="relative overflow-hidden bg-gray-950 text-white">
                        {/* Neon Glow Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.3),transparent_70%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.3),transparent_70%)]" />

                        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase"
                            >
                                Mekanisme & Persyaratan Izin Keramaian
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                            >
                                Berdasarkan Peraturan Kepolisian Terbaru
                            </motion.p>
                        </div>
                    </div>

                    {/* TIMELINE MEKANISME */}
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <h2 className="mb-12 text-center text-3xl font-bold">Mekanisme Penerbitan Izin Keramaian</h2>
                        <div className="relative mx-auto max-w-4xl">
                            {/* Connector line */}
                            <div className="absolute top-0 left-6 block h-full w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

                            <div className="flex flex-col space-y-10">
                                {mekanismeSteps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="relative flex items-start space-x-6"
                                    >
                                        {/* Icon bulat */}
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r shadow-none ${step.color} text-white shadow-lg`}
                                        >
                                            <Icon icon={step.icon} width={24} />
                                        </div>

                                        {/* Card Step */}
                                        <Card className="flex-1 border bg-card/70 shadow-none backdrop-blur-xl transition hover:border-primary/40">
                                            <CardHeader>
                                                <CardTitle className="text-lg font-bold">{step.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">{step.desc}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <ProsedurIzinKeramaianModal />
                    </div>

                    {/* PERSYARATAN */}
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <h2 className="mb-10 text-center text-3xl font-bold">Persyaratan Izin Keramaian</h2>
                        <Card className="border bg-card/50 shadow-none backdrop-blur-xl">
                            <CardContent className="py-6">
                                <ul className="list-inside list-disc space-y-3 text-muted-foreground">
                                    {persyaratanIzin.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            className="leading-relaxed"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </UserLayout>
        </>
    );
}
