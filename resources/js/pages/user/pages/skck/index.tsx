import ProsedurSKCKModal from '@/components/prosedur-skck-modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserLayout from '@/layouts/user';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function SkckPage() {
    const steps = [
        {
            title: 'Daftar Online',
            desc: 'Mendaftar melalui Super Apps POLRI untuk mengisi data pemohon.',
            icon: 'mdi:account-plus',
            color: 'from-cyan-400 to-blue-500',
        },
        {
            title: 'Lengkapi Persyaratan',
            desc: 'Siapkan dokumen KTP, KK, Akta/Ijazah, Pas Foto 4x6 5 Lembar, dan bukti kepesertaan JKN.',
            icon: 'mdi:clipboard-check',
            color: 'from-pink-500 to-red-500',
        },
        {
            title: 'Pemohon & Loket',
            desc: 'Pemohon datang ke loket dan menyerahkan berkas persyaratan.',
            icon: 'mdi:account-box',
            color: 'from-sky-500 to-blue-500',
        },
        {
            title: 'Penelitian Berkas & Identifikasi',
            desc: 'Petugas melakukan verifikasi kelengkapan berkas dan identifikasi pemohon.',
            icon: 'mdi:file-search',
            color: 'from-green-400 to-emerald-500',
        },
        {
            title: 'Koordinasi & Rekomendasi',
            desc: 'Proses koordinasi internal POLRI dan instansi terkait untuk validasi data.',
            icon: 'mdi:account-group',
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Penerbitan SKCK',
            desc: 'Jika data lengkap, SKCK diterbitkan dalam waktu 10 menit.',
            icon: 'mdi:certificate',
            color: 'from-yellow-400 to-orange-500',
        },
    ];

    const highlights = [
        { icon: 'mdi:clock-fast', title: 'Proses Cepat', desc: 'Hanya 10 menit jika semua dokumen lengkap.' },
        { icon: 'mdi:cash', title: 'Biaya Resmi', desc: 'Rp 30.000,- sesuai PP No 76 Tahun 2020.' },
        { icon: 'mdi:shield-check', title: 'Kepastian Hukum', desc: 'Sesuai standar hukum POLRI, aman & legal.' },
    ];

    const persyaratan = [
        'Fotokopi KTP 1 lembar',
        'Fotokopi KK 1 lembar',
        'Fotokopi Akta Lahir/Ijazah 1 lembar',
        'Pas foto 4x6 latar merah (5 lembar)',
        'Bukti kepesertaan JKN/BPJS aktif',
        'Formulir pendaftaran online melalui Super Apps POLRI',
    ];

    const faqs = [
        {
            q: 'Berapa lama SKCK berlaku?',
            a: 'SKCK berlaku selama 6 bulan sejak tanggal diterbitkan. Setelah itu harus diperpanjang jika masih diperlukan.',
        },
        {
            q: 'Apakah bisa mendaftar SKCK secara online?',
            a: 'Ya, Anda bisa mendaftar melalui Super Apps POLRI untuk mempercepat proses administrasi.',
        },
        {
            q: 'Berapa biaya resmi penerbitan SKCK?',
            a: 'Biaya resmi penerbitan SKCK adalah Rp 30.000,- sesuai PP No 76 Tahun 2020.',
        },
    ];

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
                            Mekanisme & Prosedur SKCK
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                        >
                            Berdasarkan Peraturan Kepolisian (Perpol) Nomor 6 Tahun 2023
                        </motion.p>
                    </div>
                </div>

                {/* TIMELINE MODERN */}
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <h2 className="mb-12 text-center text-3xl font-bold">Alur Pembuatan SKCK</h2>

                    <div className="relative mx-auto max-w-4xl">
                        {/* Connector line */}
                        <div className="absolute top-0 left-6 block h-full w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

                        <div className="flex flex-col space-y-10">
                            {steps.map((step, idx) => (
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
                                            <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-center">
                        <ProsedurSKCKModal />
                    </div>
                </div>

                {/* HIGHLIGHTS */}
                <div className="py-20 dark:bg-gray-900/90">
                    <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="rounded-2xl bg-card p-6 text-center shadow-none transition"
                            >
                                <Icon icon={item.icon} className="mx-auto mb-4 h-12 w-12 text-primary" />
                                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PERSYARATAN */}
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <h2 className="mb-10 text-center text-3xl font-bold">Persyaratan Pembuatan SKCK</h2>
                    <Card className="border bg-card/50 shadow-none backdrop-blur-xl">
                        <CardContent className="py-6">
                            <ul className="list-inside list-disc space-y-3 text-muted-foreground">
                                {persyaratan.map((item, idx) => (
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

                {/* FAQ SECTION */}
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <h2 className="mb-10 text-center text-3xl font-bold">Pertanyaan Umum (FAQ)</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="rounded-lg border bg-card/50 p-4 hover:border-primary/40"
                            >
                                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                                <p className="text-sm text-muted-foreground">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
