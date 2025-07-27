import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function KontakModern() {
    const contactItems = [
        { icon: 'mdi:map-marker', title: 'Alamat', desc: 'Jl. A. Yani No.1, Pontianak, Kalimantan Barat' },
        { icon: 'mdi:phone', title: 'Telepon', desc: '(0561) 123456' },
        { icon: 'mdi:email-outline', title: 'Email', desc: 'info@polri.go.id' },
        { icon: 'mdi:clock-outline', title: 'Jam Operasional', desc: 'Senin - Jumat: 08.00 - 16.00 WIB' },
    ];

    const socialMedia = [
        { href: 'https://web.facebook.com/', icon: 'mdi:facebook' },
        { href: 'https://www.instagram.com/', icon: 'mdi:instagram' },
        { href: 'https://wa.me/6281347786363', icon: 'mdi:whatsapp' },
    ];

    return (
        <>
            <NavbarV3 />
            <section className="min-h-screen transition-colors duration-500 dark:bg-gray-900/90">
                <div className="relative overflow-hidden bg-gray-950 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.3),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.3),transparent_70%)]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase"
                        >
                            Hubungi Kami
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                        >
                            Kami siap membantu Anda dengan pertanyaan atau informasi lebih lanjut. Silakan isi formulir di bawah ini atau hubungi kami
                            melalui media sosial.
                        </motion.p>
                    </div>
                </div>

                {/* Konten adaptif light/dark */}
                <div>
                    {/* Grid Info + Form */}
                    <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 md:grid-cols-2">
                        {/* Info Kontak */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {contactItems.map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    {/* Ikon hitam/putih sesuai mode */}
                                    <div className="rounded-full border border-gray-300 bg-gray-200 p-3 dark:border-gray-700 dark:bg-gray-800">
                                        <Icon icon={item.icon} className="h-6 w-6 text-black dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Media Sosial */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Media Sosial</h3>
                                <div className="flex space-x-4">
                                    {socialMedia.map((soc, idx) => (
                                        <a
                                            key={idx}
                                            href={soc.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-gray-300 bg-gray-200 p-3 transition hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <Icon icon={soc.icon} className="h-6 w-6 text-black dark:text-white" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Kontak Netral */}
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <Card className="relative overflow-hidden border border-gray-300 bg-white shadow-none transition dark:border-gray-700 dark:bg-gray-900">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Formulir Kontak</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        {/* Nama Lengkap */}
                                        <div className="space-y-2">
                                            <Label className="text-sm text-gray-700 dark:text-gray-300">Nama Lengkap</Label>
                                            <Input
                                                placeholder="Masukkan nama lengkap"
                                                className="mt-2 border-gray-300 bg-white py-6 text-gray-900 placeholder-gray-400 shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="text-sm text-gray-700 dark:text-gray-300">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="Masukkan email"
                                                className="mt-2 border-gray-300 bg-white py-6 text-gray-900 placeholder-gray-400 shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                            />
                                        </div>

                                        {/* Pesan */}
                                        <div className="space-y-2">
                                            <Label className="text-sm text-gray-700 dark:text-gray-300">Pesan</Label>
                                            <Textarea
                                                placeholder="Tulis pesan Anda"
                                                className="mt-2 min-h-[120px] border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                            />
                                        </div>

                                        {/* Tombol Submit */}
                                        <Button
                                            type="submit"
                                            className="flex w-full cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 py-6 text-white transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                                        >
                                            <Icon icon="mdi:send" className="mr-2 h-5 w-5" />
                                            Kirim Pesan
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-6xl px-6 pb-24"
                    >
                        <Card className="overflow-hidden border-none border-gray-300 shadow-none dark:border-gray-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.400781682443!2d109.35753647498281!3d-0.06734073550857453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59003c758035%3A0xf43632e20d038796!2sPolda%20Kalimantan%20Barat!5e1!3m2!1sid!2sid!4v1753624573263!5m2!1sid!2sid"
                                width="100%"
                                height="400"
                                allowFullScreen
                                loading="lazy"
                                className="border-0"
                            />
                        </Card>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
}
