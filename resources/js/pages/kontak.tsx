import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Kontak() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
                {/* Hero Section */}
                <div className="relative py-20 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25),transparent_70%)]" />
                    <div className="relative mx-auto mt-12 max-w-3xl px-6">
                        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent uppercase md:text-6xl">
                            Hubungi Kami
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Ada pertanyaan atau butuh bantuan? Hubungi kami melalui informasi berikut atau formulir.
                        </p>
                    </div>
                </div>

                {/* Konten Grid */}
                <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-start gap-12 px-6 pb-24 md:grid-cols-2">
                    {/* Info Kontak - Tanpa Card */}
                    <div className="space-y-8">
                        {/* Alamat */}
                        <div className="flex items-start space-x-4">
                            <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3">
                                <MapPin className="h-6 w-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-cyan-400">Alamat</h3>
                                <p className="text-sm text-gray-300">Jl. A. Yani No.1, Pontianak, Kalimantan Barat</p>
                            </div>
                        </div>

                        {/* Telepon */}
                        <div className="flex items-start space-x-4">
                            <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3">
                                <Phone className="h-6 w-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-cyan-400">Telepon</h3>
                                <p className="text-sm text-gray-300">(0561) 123456</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3">
                                <Mail className="h-6 w-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-cyan-400">Email</h3>
                                <p className="text-sm text-gray-300">info@polri.go.id</p>
                            </div>
                        </div>

                        {/* Media Sosial */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-cyan-400">Media Sosial</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://web.facebook.com/people/SKCK-polda-Kalbar/61551476426434/?_rdc=1&_rdr#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                                >
                                    <Facebook className="h-6 w-6 text-cyan-400" />
                                </a>
                                <a
                                    href="https://www.instagram.com/skckpoldakalbar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                                >
                                    <Instagram className="h-6 w-6 text-cyan-400" />
                                </a>
                                <a
                                    href="https://wa.me/6281347786363"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                                >
                                    <MessageCircle className="h-6 w-6 text-cyan-400" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Kontak */}
                    <Card className="relative overflow-hidden border border-cyan-500/30 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

                        <CardHeader>
                            <CardTitle className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                                Formulir Kontak
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300">Nama Lengkap</label>
                                    <Input
                                        placeholder="Masukkan nama lengkap"
                                        className="border-white/20 bg-white/10 text-white placeholder-gray-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="Masukkan email"
                                        className="border-white/20 bg-white/10 text-white placeholder-gray-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300">Pesan</label>
                                    <Textarea
                                        placeholder="Tulis pesan Anda"
                                        className="min-h-[120px] border-white/20 bg-white/10 text-white placeholder-gray-400"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-white hover:from-blue-500 hover:to-purple-500"
                                >
                                    Kirim Pesan
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
}
