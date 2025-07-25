import { Footer } from '@/components/footer';
import GallerySection from '@/components/galeri-section';
import HeroSectionV3 from '@/components/hero-section/hero-section3';
import NavbarV3 from '@/components/navbar/navbar3';
import NewsSection from '@/components/news-section';
import ServiceSectionV3 from '@/components/service-section/service-section3';
import StatisticSection from '@/components/statistic-section';
import VideoSection from '@/components/video-section';

export default function Welcome() {
    return (
        <>
            <NavbarV3 />
            <HeroSectionV3 />
            <ServiceSectionV3 />
            <StatisticSection />
            <VideoSection />
            <GallerySection />
            <NewsSection />
            <Footer />
        </>
    );
}
