import NavbarV3 from '@/components/navbar/navbar3';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function VisiMisiV3Modern() {
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

    const highlights = [
        { icon: 'mdi:shield-check', title: 'Keamanan Terjamin', desc: 'Sistem keamanan berlapis dan teruji secara nasional.' },
        { icon: 'mdi:account-group', title: 'Kolaborasi Masyarakat', desc: 'Sinergi bersama masyarakat untuk mewujudkan keamanan.' },
        { icon: 'mdi:city', title: 'Jangkauan Luas', desc: 'Tersedia di ratusan kota dan wilayah Indonesia.' },
    ];

    return (
        <>
            <NavbarV3 />
            <section className="bg-background text-foreground">
                {/* HERO */}
                <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
                    {/* Layer blur neon */}
                    <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/30 blur-[120px]"></div>
                    <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-500/30 blur-[120px]"></div>

                    <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase md:text-7xl"
                        >
                            Visi & Misi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                        >
                            Fondasi pelayanan publik modern yang mengutamakan keamanan, kolaborasi, dan inovasi berkelanjutan.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10"
                        >
                            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90">
                                Pelajari Lebih Lanjut
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* VISI & MISI SPLIT SECTION */}
                <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
                    {/* VISI */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="flex items-center gap-3 text-3xl font-bold">
                            <Icon icon="mdi:eye-outline" className="h-8 w-8 text-cyan-500" /> Visi Kami
                        </h2>
                        <p className="text-lg leading-relaxed">{visi}</p>
                    </motion.div>

                    {/* MISI */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="border border-purple-500/20 bg-card backdrop-blur-xl transition hover:border-purple-400">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
                                    <Icon icon="mdi:target" className="h-7 w-7" /> Misi Kami
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-decimal space-y-2">
                                    {misiItems.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                                            className="leading-relaxed"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* HIGHLIGHT FEATURES */}
                <div className="bg-muted/50 py-20">
                    <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="rounded-2xl border border-border/30 bg-card p-6 text-center shadow transition hover:shadow-lg"
                            >
                                <Icon icon={item.icon} className="mx-auto mb-4 h-12 w-12 text-primary" />
                                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA FINAL */}
                <div className="relative overflow-hidden py-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-[120px]" />
                    <div className="relative mx-auto max-w-4xl px-6 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-4 text-4xl font-bold"
                        >
                            Bersama Kita Wujudkan Keamanan Modern
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mb-6 text-muted-foreground"
                        >
                            Bergabunglah dengan visi kami untuk menciptakan masa depan pelayanan publik yang transparan dan inklusif.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white hover:opacity-90">
                                Hubungi Kami
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
