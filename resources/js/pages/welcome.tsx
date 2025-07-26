import { Footer } from '@/components/footer';
import GallerySection from '@/components/galeri-section';
import HeroSectionV3 from '@/components/hero-section/hero-section3';
import NavbarV3 from '@/components/navbar/navbar3';
import NewsSection from '@/components/news-section';
import ServiceSectionV2 from '@/components/service-section/service-section2';
import StatisticSectionV3 from '@/components/statistic-section/statistic-section3';
import VideoSection from '@/components/video-section';

export default function Welcome() {
    return (
        <>
            <NavbarV3 />
            <HeroSectionV3 />
            <ServiceSectionV2 />
            <StatisticSectionV3 />
            <VideoSection />
            <GallerySection />
            <NewsSection />
            <Footer />
        </>
    );
}
