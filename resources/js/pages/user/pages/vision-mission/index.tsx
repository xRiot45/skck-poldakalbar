import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserLayout from '@/layouts/user';
import { Mission } from '@/models/profile-management/mission';
import { Vision } from '@/models/profile-management/vision';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface VisionMissionPageProps {
    visions: Vision[];
    missions: Mission[];
}

export default function VisionMissionPage({ visions, missions }: VisionMissionPageProps) {
    return (
        <UserLayout>
            <section className="min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-gray-900/90">
                {/* Banner */}
                <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 py-20 text-center text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.3),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.3),transparent_70%)]" />
                    <div className="relative mx-auto max-w-4xl px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase"
                        >
                            Visi & Misi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 text-lg text-gray-300"
                        >
                            Mewujudkan pelayanan publik yang futuristik, efisien, dan transparan dengan teknologi mutakhir.
                        </motion.p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
                    {/* Visi Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="relative overflow-hidden border-none bg-white shadow-none transition dark:border-gray-800 dark:bg-gray-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/5 to-pink-700/5 dark:from-purple-700/10 dark:to-pink-700/10" />
                            <CardHeader className="flex items-center gap-3">
                                <Icon icon="mdi:eye-outline" className="h-8 w-8 text-purple-500" />
                                <CardTitle className="text-3xl font-bold">Visi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center leading-relaxed">
                                    {visions.map((item, idx) => (
                                        <span key={idx} className="block">
                                            {item.title}
                                        </span>
                                    ))}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Misi Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="relative overflow-hidden border-none bg-white shadow-none transition dark:border-gray-800 dark:bg-gray-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-cyan-700/5 dark:from-blue-700/10 dark:to-cyan-700/10" />
                            <CardHeader className="flex items-center gap-3">
                                <Icon icon="mdi:target" className="h-8 w-8 text-cyan-500" />
                                <CardTitle className="text-3xl font-bold">Misi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-disc space-y-2">
                                    {missions.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                                            className="leading-relaxed"
                                        >
                                            {item?.title}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </UserLayout>
    );
}
