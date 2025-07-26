import StatisticImg from '@/assets/images/statistic.png';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function StatisticSectionV1() {
    const stats = [
        { value: '8000+', label: 'SKCK Terbit' },
        { value: '10+', label: 'Izin Keramaian' },
        { value: '99%', label: 'Tingkat Kepuasan' },
        { value: '24/7', label: 'Pelayanan Online' },
    ];

    return (
        <section className="w-fulle relative py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
                {/* Gambar Statistik dengan Modal */}
                <div className="relative flex justify-center">
                    <div className="absolute -inset-6 animate-pulse rounded-full bg-blue-400/20 blur-3xl" />

                    <Dialog>
                        <DialogTrigger asChild>
                            <img
                                src={StatisticImg}
                                alt="statistic"
                                className="relative z-10 w-full max-w-6xl cursor-pointer rounded-2xl border border-white/20 shadow-xl transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]"
                            />
                        </DialogTrigger>
                        <DialogContent className="border-none bg-transparent p-0 shadow-none backdrop-blur-md sm:max-w-7xl">
                            <img src={StatisticImg} alt="statistic full view" className="w-full rounded-2xl shadow-lg" />
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Konten Statistik */}
                <div>
                    <h2 className="text-4xl font-extrabold text-gray-900">Statistik Layanan</h2>
                    <p className="mt-4 text-gray-600 md:text-lg">
                        Data real-time Ditintelkam Polda Kalbar memberikan transparansi dan kemudahan informasi bagi masyarakat dengan teknologi
                        modern.
                    </p>

                    {/* Cards Statistik */}
                    <div className="mt-10 grid grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <Card
                                key={i}
                                className="group border border-gray-200 bg-white/70 p-2 shadow-none backdrop-blur-sm transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]"
                            >
                                <CardHeader className="flex flex-col items-center p-6 text-center md:items-start md:text-left">
                                    <CardTitle className="text-3xl font-bold text-black transition-colors">{stat.value}</CardTitle>
                                    <CardDescription className="mt-1 text-sm text-gray-600">{stat.label}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
