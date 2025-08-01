import { Footer } from '@/components/footer';
import NavbarV3 from '@/components/navbar/navbar3';
import NewsSectionV3 from '@/components/news-section/news-section3';
import ServiceSectionV2 from '@/components/service-section/service-section2';
import StatisticSectionV3 from '@/components/statistic-section/statistic-section3';
import { Gallery } from '@/models/gallery-management/gallery';
import { Video } from '@/models/video-management/video';
import GallerySection from './shared/gallery-section';
import HeroSection from './shared/hero-section';
import VideoSection from './shared/video-section';

interface HomepageProps {
    galleries: Gallery[];
    videos: Video[];
}

export default function Homepage({ galleries, videos }: HomepageProps) {
    console.log(videos);
    return (
        <>
            <NavbarV3 />
            <HeroSection />
            <ServiceSectionV2 />
            <StatisticSectionV3 />
            <VideoSection videos={videos} />
            <GallerySection galleries={galleries} />
            <NewsSectionV3 />
            <Footer />
        </>
    );
}
