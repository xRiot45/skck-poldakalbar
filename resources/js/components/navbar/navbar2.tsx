import LogoIcon from '@/assets/images/logo_1.png';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import ThemeToggle from '../theme-toggle';

const NavbarV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme listener
    useEffect(() => {
        const checkDark = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
        checkDark();

        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });
        return () => observer.disconnect();
    }, []);

    // Class util
    const navTextClass =
        !isDarkMode && !isScrolled
            ? 'text-white hover:bg-white/10 hover:text-white'
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white';

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
                isScrolled ? 'border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80' : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img
                        src={LogoIcon}
                        alt="Logo"
                        className="h-12 drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                    />
                    <div>
                        <h1
                            className={`text-sm font-bold tracking-wide uppercase ${
                                !isDarkMode && !isScrolled ? 'text-white' : 'text-gray-800 dark:text-gray-100'
                            }`}
                        >
                            Direktorat Intelijen Keamanan
                        </h1>
                        <span className={`font-bold uppercase ${!isDarkMode && !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                            Polda Kalbar
                        </span>
                    </div>
                </div>

                {/* Menu Desktop */}
                <div className="hidden items-center md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-2">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className={`rounded-lg px-3 py-2 text-sm font-medium transition ${navTextClass}`}>
                                    Beranda
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Profil */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={`rounded-lg bg-transparent transition ${navTextClass}`}>
                                    Profil
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                                    <ul className="w-44 space-y-2 p-3">
                                        <li>
                                            <NavigationMenuLink
                                                href="/profil"
                                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                            >
                                                Profil
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink
                                                href="/visi"
                                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                            >
                                                Visi & Misi
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Layanan */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={`rounded-lg bg-transparent transition ${navTextClass}`}>
                                    Layanan
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                                    <ul className="w-44 space-y-2 p-3">
                                        <li>
                                            <NavigationMenuLink
                                                href="/skck"
                                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                            >
                                                SKCK
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                            >
                                                Izin Keramaian
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Berita */}
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className={`rounded-lg px-3 py-2 text-sm font-medium transition ${navTextClass}`}>
                                    Berita
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Kontak */}
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/kontak" className={`rounded-lg px-3 py-2 text-sm font-medium transition ${navTextClass}`}>
                                    Kontak
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <ThemeToggle />
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu pakai Sheet */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`transition ${
                                    !isDarkMode && !isScrolled
                                        ? 'text-white hover:bg-white/10'
                                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                }`}
                            >
                                <Icon icon="mdi:menu" className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-96 bg-background text-foreground">
                            <SheetTitle>
                                <div className="flex items-center gap-4 p-4">
                                    <img
                                        src={LogoIcon}
                                        alt="Logo"
                                        className="h-12 drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                                    />
                                    <div>
                                        <h1 className="text-sm font-bold tracking-wide text-foreground uppercase">Direktorat Intelijen Keamanan</h1>
                                        <span className="font-bold text-muted-foreground uppercase">Polda Kalbar</span>
                                    </div>
                                </div>
                            </SheetTitle>

                            <div className="flex flex-col gap-8 p-6">
                                <a href="/" className="text-sm font-medium hover:text-primary">
                                    Beranda
                                </a>
                                <details>
                                    <summary className="cursor-pointer text-sm font-medium hover:text-primary">Profil</summary>
                                    <div className="mt-2 ml-4 flex flex-col gap-2">
                                        <a href="/profil" className="text-sm hover:text-primary">
                                            Profil
                                        </a>
                                        <a href="/visi" className="text-sm hover:text-primary">
                                            Visi & Misi
                                        </a>
                                    </div>
                                </details>
                                <details>
                                    <summary className="cursor-pointer text-sm font-medium hover:text-primary">Layanan</summary>
                                    <div className="mt-2 ml-4 flex flex-col gap-2">
                                        <a href="/skck" className="text-sm hover:text-primary">
                                            SKCK
                                        </a>
                                        <a href="#" className="text-sm hover:text-primary">
                                            Izin Keramaian
                                        </a>
                                    </div>
                                </details>
                                <a href="#" className="text-sm font-medium hover:text-primary">
                                    Berita
                                </a>
                                <a href="/kontak" className="text-sm font-medium hover:text-primary">
                                    Kontak
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default NavbarV2;
