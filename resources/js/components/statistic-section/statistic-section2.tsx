'use client';

import StatisticImg from '@/assets/images/statistic.png';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

export default function StatisticSectionV4() {
    const stats = [
        { value: '8K+', label: 'SKCK Terbit' },
        { value: '10+', label: 'Izin Keramaian' },
        { value: '99%', label: 'Tingkat Kepuasan' },
        { value: '24/7', label: 'Pelayanan Online' },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-32 dark:from-gray-950 dark:to-gray-900">
            {/* Glow Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-6 text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Statistik Layanan</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Layanan real-time Ditintelkam Polda Kalbar dengan desain modern, fokus pada kenyamanan visual dan informasi yang jelas.
                    </p>
                </motion.div>

                {/* Gambar + Statistik */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative mt-16 flex flex-col items-center"
                >
                    {/* Gambar */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.img
                                src={StatisticImg}
                                alt="statistic"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-3xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] dark:border-gray-700"
                            />
                        </DialogTrigger>
                        <DialogContent className="border-none bg-transparent p-0 shadow-none backdrop-blur-md sm:max-w-7xl">
                            <img src={StatisticImg} alt="statistic full view" className="w-full rounded-2xl shadow-lg" />
                        </DialogContent>
                    </Dialog>

                    {/* Statistik Bar */}
                    <div className="mt-12 flex w-full flex-wrap justify-center gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white/80 px-8 py-6 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] dark:border-gray-700 dark:bg-gray-800/60">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
