import ProsedurSendakModal from '@/components/prosedur-sendak-modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserLayout from '@/layouts/user';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const senpiTimeline = [
    {
        title: 'Rekomendasi Izin Pembelian',
        desc: `1. Surat permohonan
2. Identitas senjata api
3. Data lokasi objek yang dikelola dengan menjelaskan ancaman yang dihadapi
4. Data anggota Polsus
5. Data senpi yang sudah dimiliki
6. Rencana pendistribusian
7. Fotokopi KTP penanggung jawab
8. SKCK penanggung jawab`,
        icon: 'mdi:clipboard-text',
        color: 'from-blue-400 to-cyan-500',
    },
    {
        title: 'Ijin Penguasaan Pinjam Pakai (Kartu Pengpin)',
        desc: `1. Surat permohonan
2. Surat perintah tugas dari pimpinan instansi
3. FC Buku pas senjata api
4. FC KTA Polsus
5. FC Sket mahir menembak
6. FC Sket kesehatan
7. FC Hasil tes psikologi
8. FC KTP
9. FC SKCK
10. Pasfoto latar merah 2x3 (2 lembar) & 4x6 (2 lembar)
11. Membayar biaya PNBP Rp. 50.000,- / kartu`,
        icon: 'mdi:id-card',
        color: 'from-purple-400 to-pink-500',
    },
    {
        title: 'Izin Membawa dan/atau Penggunaan',
        desc: `1. Surat permohonan
2. Surat perintah tugas dari pimpinan instansi
3. Data senjata api yang digunakan
4. FC Kartu Pengpin
5. FC Buku pas senjata api`,
        icon: 'mdi:shield-check',
        color: 'from-green-400 to-teal-500',
    },
    {
        title: 'Rekomendasi Pembaruan Buku Pas',
        desc: `1. Surat permohonan
2. FC KTP & KK penanggung jawab senpi
3. FC Skep jabatan penanggung jawab senpi
4. FC KTA Satpam/Polsus
5. SKCK penanggung jawab senpi
6. Cek fisik senpi
7. Buku pas senpi yang lama
8. Pasfoto latar merah ukuran 4x6 sebanyak buku yang diajukan`,
        icon: 'mdi:book-refresh',
        color: 'from-orange-400 to-amber-500',
    },
];

export default function SendakPage() {
    return (
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
                            Prosedur Persyaratan Izin Senjata Api Polsus
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                        >
                            Berdasarkan Perpol Nomor 1 Tahun 2022 tentang Perizinan, Pengawasan dan Pengendalian Senjata Api
                        </motion.p>
                    </div>
                </div>

                {/* TIMELINE */}
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <h2 className="mb-12 text-center text-3xl font-bold">Tahapan Persyaratan</h2>

                    <div className="relative mx-auto max-w-4xl">
                        {/* Garis vertikal */}
                        <div className="absolute top-0 left-6 block h-full w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

                        <div className="flex flex-col space-y-10">
                            {senpiTimeline.map((step, idx) => (
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
                <div className="mb-10 flex items-center justify-center">
                    <ProsedurSendakModal />
                </div>
            </section>
        </UserLayout>
    );
}
