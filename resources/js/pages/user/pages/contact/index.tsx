import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import UserLayout from '@/layouts/user';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

type ContactForm = {
    name: string;
    email: string;
    message: string;
};

const contactItems = [
    { icon: 'mdi:map-marker', title: 'Alamat', desc: 'W9M6+329, Bangka Belitung Laut, Kec. Pontianak Tenggara, Kota Pontianak, Kalimantan Barat' },
    { icon: 'mdi:phone', title: 'Telepon', desc: '+6281347786363' },
    { icon: 'mdi:email-outline', title: 'Email', desc: 'yanminpoldakalbar@gmail.com' },
    { icon: 'mdi:clock-outline', title: 'Jam Operasional', desc: 'Senin - Jumat: 08.00 - 14.30 WIB' },
];

const socialMedia = [
    { href: 'https://web.facebook.com/profile.php?id=61551044680803', icon: 'mdi:facebook' },
    { href: 'https://www.instagram.com/skckpoldakalbar/', icon: 'mdi:instagram' },
    { href: 'https://wa.me/6281347786363', icon: 'mdi:whatsapp' },
    { href: 'https://www.youtube.com/@SKCKPoldaKalbar', icon: 'mdi:youtube' },
];

export default function ContactPage() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<ContactForm>>({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => {
                toast.success('Success', {
                    description: 'Masukkan anda berhasil dikirim!',
                    action: {
                        label: 'Tutup',
                        onClick: () => toast.dismiss(),
                    },
                });
                reset();
            },
            onError: (error) => {
                Object.keys(error).forEach((key) => {
                    toast.error('Error', {
                        description: error[key],
                        action: {
                            label: 'Tutup',
                            onClick: () => toast.dismiss(),
                        },
                    });
                });
            },
        });
    };

    return (
        <UserLayout>
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
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        {/* Nama Lengkap */}
                                        <div className="space-y-2">
                                            <Label className="text-sm text-gray-700 dark:text-gray-300">
                                                Nama Lengkap <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Masukkan nama anda"
                                                className={cn('mt-2 rounded-md px-4 py-6', errors.name && 'border border-red-500')}
                                            />
                                            <InputError message={errors.name} className="mt-2" />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="text-sm text-gray-700 dark:text-gray-300">
                                                Email <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="Masukkan email anda"
                                                className={cn('mt-2 rounded-md px-4 py-6', errors.email && 'border border-red-500')}
                                            />
                                        </div>

                                        {/* Pesan */}
                                        <div className="space-y-2">
                                            <Label className="text-sm text-gray-700 dark:text-gray-300">
                                                Pesan <span className="text-red-500">*</span>
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tulis pesan Anda"
                                                className={cn('mt-2 min-h-32 rounded-md p-4', errors.message && 'border border-red-500')}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                tabIndex={3}
                                                autoComplete="message"
                                            />
                                            <InputError message={errors.message} className="mt-2" />
                                        </div>

                                        {/* Tombol Submit */}
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="flex w-full cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 py-6 text-white transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                                        >
                                            <Icon icon="mdi:send" className="mr-2 h-5 w-5" />
                                            {processing ? 'Loading...' : 'Kirim'}
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
        </UserLayout>
    );
}
