import Footer from './footer';
import Navbar from './navbar';

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
