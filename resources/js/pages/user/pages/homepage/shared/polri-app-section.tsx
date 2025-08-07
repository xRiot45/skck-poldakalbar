import PhoneMockup from '@/assets/images/mockup.png'; // Gambar mockup ponsel
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function PolriAppSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white bg-gradient-to-br px-4 py-16 md:py-24 lg:px-24">
            <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 sm:max-w-7xl lg:flex-row">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                >
                    <h2 className="text-4xl leading-tight font-bold text-black md:text-5xl">
                        Layanan Polisi <br /> Dalam Genggaman Anda
                    </h2>
                    <p className="mt-4 text-lg text-black/90 md:text-xl">
                        Akses cepat layanan dan informasi kepolisian hanya dengan satu aplikasi:{' '}
                        <span className="font-semibold">POLRI Super App</span>.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a href="https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi">
                            <Button size="lg" className="w-44 gap-2 bg-black py-7 text-lg text-white hover:bg-gray-900">
                                <Icon icon="logos:google-play-icon" className="h-5 w-5" />
                                Google Play
                            </Button>
                        </a>
                        <a href="https://apps.apple.com/id/app/polri-presisi/id1617509708?l=id">
                            <Button size="lg" className="w-44 gap-2 bg-black py-7 text-lg text-white hover:bg-gray-900">
                                <Icon icon="mingcute:appstore-fill" className="h-5 w-5" />
                                App Store
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Phone Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                >
                    <img src={PhoneMockup} alt="POLRI App Interface" className="w-full drop-shadow-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
