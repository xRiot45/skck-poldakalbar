import { Footer } from '@/components/footer';
import GallerySection from '@/components/galeri-section';
import HeroSectionV3 from '@/components/hero-section/hero-section3';
import LayananSection from '@/components/layanan-section';
import NavbarV3 from '@/components/navbar/navbar3';
import NewsSection from '@/components/news-section';
import StatisticSection from '@/components/statistic-section';
import VideoSection from '@/components/video-section';

export default function Welcome() {
    return (
        <>
            <NavbarV3 />
            <HeroSectionV3 />
            <LayananSection />
            <StatisticSection />
            <VideoSection />
            <GallerySection />
            <NewsSection />
            <Footer />
        </>
    );
}
