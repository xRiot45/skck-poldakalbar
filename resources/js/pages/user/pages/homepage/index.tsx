import { Footer } from '@/components/footer';
import HeroSectionV4 from '@/components/hero-section/hero-section4';
import NavbarV3 from '@/components/navbar/navbar3';
import NewsSectionV3 from '@/components/news-section/news-section3';
import ServiceSectionV2 from '@/components/service-section/service-section2';
import StatisticSectionV3 from '@/components/statistic-section/statistic-section3';
import VideoSectionV3 from '@/components/video-section/video-section3';
import { Gallery } from '@/models/gallery-management/gallery';
import GallerySection from './shared/gallery-section';

interface HomepageProps {
    galleries: Gallery[];
}

export default function Homepage({ galleries }: HomepageProps) {
    return (
        <>
            <NavbarV3 />
            <HeroSectionV4 />
            <ServiceSectionV2 />
            <StatisticSectionV3 />
            <VideoSectionV3 />
            <GallerySection galleries={galleries} />
            <NewsSectionV3 />
            <Footer />
        </>
    );
}
