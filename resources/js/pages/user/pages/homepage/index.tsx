import UserLayout from '@/layouts/user';
import { Gallery } from '@/models/gallery-management/gallery';
import { News } from '@/models/news-management/news';
import { Video } from '@/models/video-management/video';
import { Head } from '@inertiajs/react';
import GallerySection from './shared/gallery-section';
import HeroSection from './shared/hero-section';
import NewsSection from './shared/news-section';
import PolriAppSection from './shared/polri-app-section';
import VideoSection from './shared/video-section';

interface HomepageProps {
    galleries: Gallery[];
    videos: Video[];
    news: News[];
}

export default function Homepage({ galleries, videos, news }: HomepageProps) {
    return (
        <>
            <Head title="Beranda" />
            <UserLayout>
                <HeroSection />
                <PolriAppSection />
                {/* <ServiceSection /> */}
                {/* <StatisticSection /> */}
                <VideoSection videos={videos} />
                <GallerySection galleries={galleries} />
                <NewsSection news={news} />
            </UserLayout>
        </>
    );
}
