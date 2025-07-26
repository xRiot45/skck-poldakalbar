import StatisticImg from '@/assets/images/statistic.png';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function StatisticSectionV3() {
    const stats = [
        {
            icon: 'mdi:certificate',
            value: '8K+',
            label: 'SKCK Terbit',
            desc: 'Jumlah SKCK yang diterbitkan secara online maupun offline setiap tahunnya.',
        },
        {
            icon: 'mdi:account-group',
            value: '10+',
            label: 'Izin Keramaian',
            desc: 'Proses perizinan acara besar dengan pelayanan cepat dan transparan.',
        },
        {
            icon: 'mdi:emoticon-happy-outline',
            value: '99%',
            label: 'Kepuasan Publik',
            desc: 'Mayoritas pengguna merasa puas dengan layanan Ditintelkam Polda Kalbar.',
        },
        {
            icon: 'mdi:clock-outline',
            value: '24/7',
            label: 'Layanan Online',
            desc: 'Pelayanan berbasis digital yang siap membantu kapan pun dibutuhkan.',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden py-24 dark:bg-gray-900/90 dark:text-white">
            <div className="mx-auto max-w-7xl px-6 text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Statistik & Pencapaian Kami</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Ditintelkam Polda Kalbar selalu berinovasi untuk memberikan pelayanan terbaik kepada masyarakat dengan teknologi modern dan
                        transparansi data yang akurat.
                    </p>
                </motion.div>

                {/* Statistik Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className="flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white/80 px-6 py-8 shadow-none backdrop-blur-sm transition hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] dark:border-gray-700 dark:bg-gray-800/60">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-none">
                                    <Icon icon={stat.icon} className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{stat.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA - Open Modal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size="lg"
                                className="cursor-pointe cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-6 text-white transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                            >
                                <Icon icon="mdi:chart-bar" className="h-5 w-5" />
                                Lihat Detail Statistik
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="border-none bg-white p-8 shadow-xl backdrop-blur-md sm:max-w-6xl dark:bg-gray-900/90">
                            {/* Gambar */}
                            <motion.img
                                src={StatisticImg}
                                alt="Detail Statistik"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="w-full rounded-2xl shadow-none"
                            />
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </div>
        </section>
    );
}
