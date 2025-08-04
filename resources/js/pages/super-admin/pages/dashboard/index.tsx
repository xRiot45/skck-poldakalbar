import CardSummaryStatistics from '@/components/card-summary-statistic';
import SuperAdminLayout from '@/layouts/super-admin';
import { BreadcrumbItem } from '@/types';

interface DashboardSuperAdminPageProps {
    totalVisitors: number;
    totalNews: number;
    totalVideos: number;
    totalGalleries: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Super Admin',
        href: '#',
    },
];

export default function DashboardSuperAdminPage({ totalVisitors, totalNews, totalVideos, totalGalleries }: DashboardSuperAdminPageProps) {
    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <main className="p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <CardSummaryStatistics
                        data={totalVisitors}
                        title="Total Pengunjung"
                        subtitle="Pengunjung"
                        description="Jumlah total pengunjung aplikasi"
                        icon="mdi:account-group"
                    />

                    <CardSummaryStatistics
                        data={totalNews}
                        title="Total Berita"
                        subtitle="Berita"
                        description="Jumlah total berita yang dipublikasikan"
                        icon="mdi:newspaper"
                    />

                    <CardSummaryStatistics
                        data={totalVideos}
                        title="Total Video"
                        subtitle="Video"
                        description="Jumlah total video yang dipublikasikan"
                        icon="mdi:video"
                    />

                    <CardSummaryStatistics
                        data={totalGalleries}
                        title="Total Galeri"
                        subtitle="Galeri"
                        description="Jumlah total galeri yang dipublikasikan"
                        icon="mdi:image-multiple"
                    />
                </div>
            </main>
        </SuperAdminLayout>
    );
}
