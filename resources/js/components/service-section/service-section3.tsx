import { Card } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Pembuatan SKCK',
        desc: 'Ajukan SKCK online dengan proses cepat, aman, dan transparan. Tanpa antre, semua serba digital.',
        icon: 'fxemoji:note',
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    },
    {
        title: 'Izin Keramaian',
        desc: 'Pengajuan izin acara publik kini lebih mudah. Terintegrasi dan bisa dipantau secara real-time.',
        icon: 'noto:party-popper',
        gradient: 'from-pink-500 via-rose-500 to-orange-400',
    },
    {
        title: 'Sendak',
        desc: 'Informasi lengkap layanan Direktorat Intelijen Keamanan dan panduan regulasi terbaru.',
        icon: 'mdi:gun',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    },
];

export default function ServiceSectionV3() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-32 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            <div className="relative mx-auto max-w-6xl px-6">
                {/* Title */}
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
                    >
                        Pelayanan Yang{' '}
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Kami Berikan</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-gray-600 dark:text-gray-300"
                    >
                        Kami menyediakan berbagai layanan untuk memenuhi kebutuhan masyarakat, mulai dari pembuatan SKCK hingga izin keramaian. Semua
                        layanan kami dirancang untuk memberikan kemudahan dan kenyamanan bagi Anda.
                    </motion.p>
                </div>

                {/* Timeline Zig-Zag */}
                <div className="relative flex flex-col gap-8">
                    {/* Line Connector */}
                    <div className="absolute top-0 left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 md:block"></div>

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Connector Dot */}
                            <div className="absolute top-6 left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-purple-500 shadow-none md:block dark:border-gray-900"></div>

                            {/* Card */}
                            <div
                                className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:-mr-5 md:pr-0 md:text-left' : 'md:-ml-5 md:pl-0 md:text-right'}`}
                            >
                                <Card
                                    className={`group relative transform rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-none backdrop-blur-md transition-all hover:scale-[1.03] hover:shadow-none dark:border-gray-700 dark:bg-gray-800/60`}
                                >
                                    <div className="relative flex flex-col items-start gap-4">
                                        {/* Icon */}
                                        <div
                                            className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-none transition-transform duration-300 group-hover:rotate-6`}
                                        >
                                            <Icon icon={service.icon} className="text-3xl text-white" />
                                        </div>

                                        {/* Title & Desc */}
                                        <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
