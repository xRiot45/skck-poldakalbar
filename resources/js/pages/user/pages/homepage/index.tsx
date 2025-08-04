import ServiceSectionV2 from '@/components/service-section/service-section2';
import StatisticSectionV3 from '@/components/statistic-section/statistic-section3';
import UserLayout from '@/layouts/user';
import { Gallery } from '@/models/gallery-management/gallery';
import { News } from '@/models/news-management/news';
import { Video } from '@/models/video-management/video';
import GallerySection from './shared/gallery-section';
import HeroSection from './shared/hero-section';
import NewsSection from './shared/news-section';
import VideoSection from './shared/video-section';

interface HomepageProps {
    galleries: Gallery[];
    videos: Video[];
    news: News[];
}

export default function Homepage({ galleries, videos, news }: HomepageProps) {
    return (
        <>
            <UserLayout>
                <HeroSection />
                <ServiceSectionV2 />
                <StatisticSectionV3 />
                <VideoSection videos={videos} />
                <GallerySection galleries={galleries} />
                <NewsSection news={news} />
            </UserLayout>
        </>
    );
}
