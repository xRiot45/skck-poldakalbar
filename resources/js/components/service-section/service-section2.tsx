import ServiceIlustration from '@/assets/images/service.svg';
import { Card } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Pembuatan SKCK',
        desc: 'Ajukan Surat Keterangan Catatan Kepolisian online tanpa ribet. Proses cepat, aman, dan transparan.',
        icon: 'fxemoji:note',
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    },
    {
        title: 'Izin Keramaian',
        desc: 'Pengajuan izin acara publik kini serba digital, terintegrasi, dan mudah dipantau oleh masyarakat.',
        icon: 'noto:party-popper',
        gradient: 'from-pink-500 via-rose-500 to-orange-400',
    },
    {
        title: 'Sendak',
        desc: 'Informasi lengkap layanan Direktorat Intelijen Keamanan, update regulasi, dan panduan masyarakat.',
        icon: 'mdi:gun',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    },
];

export default function ServiceSectionV2() {
    return (
        <section className="relative w-full overflow-hidden py-24 dark:bg-gray-900/90 dark:text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 md:flex-row">
                {/* LEFT: Title + Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="order-1 flex-1 text-center md:order-none md:text-left"
                >
                    <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Pelayanan Yang
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Kami Berikan</span>
                    </h2>
                    <p className="text-md mt-6 max-w-lg leading-8 text-gray-600 dark:text-gray-300">
                        Kami menyediakan layanan digital modern yang memudahkan masyarakat Kalimantan Barat untuk membuat SKCK, Izin Keramaian, dan
                        Sendak.
                    </p>

                    {/* Ilustrasi Animasi */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="relative mx-auto mt-10 max-w-sm md:mx-0"
                    >
                        <img src={ServiceIlustration} alt="Illustration" width={400} height={400} className="drop-shadow-2xl dark:opacity-90" />
                    </motion.div>
                </motion.div>

                {/* RIGHT: Service Cards */}
                <div className="order-2 flex-1 space-y-4 md:order-none">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`group relative w-full transform rounded-xl border border-gray-200 bg-white p-8 shadow-none transition-all hover:scale-[1.02] hover:shadow-xl dark:border-gray-700 dark:bg-gray-800`}
                            >
                                {/* Gradient Glow */}
                                <div
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                                ></div>

                                <div className="relative flex flex-col items-start gap-4 text-left">
                                    {/* Icon Gradient */}
                                    <div
                                        className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-none transition-transform duration-300 group-hover:rotate-3`}
                                    >
                                        <Icon icon={service.icon} className="text-3xl text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
