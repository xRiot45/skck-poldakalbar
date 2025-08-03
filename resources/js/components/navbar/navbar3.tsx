import LogoIcon from '@/assets/images/logo_1.png';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ThemeToggle from '../theme-toggle';

const NavbarV3 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const checkDark = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const menuColor = !isDarkMode && !isScrolled ? 'text-white' : 'text-foreground';

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 z-50 w-full py-2 transition-colors duration-300 ${
                isScrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={LogoIcon} alt="Logo" className="h-12" />
                    <div>
                        <h1 className={`text-sm font-bold tracking-wide uppercase ${menuColor}`}>
                            Direktorat Intelijen Keamanan <br />
                            Polda Kalbar
                        </h1>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            {/* Beranda */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className={`flex flex-row items-center gap-2 rounded-lg bg-transparent transition ${menuColor} hover:text-primary`}
                                >
                                    <Icon icon="material-symbols:home" className="h-4 w-4" />
                                    Beranda
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-500"
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Profil Dropdown */}
                            <NavigationMenu className="relative">
                                <NavigationMenuList className="space-x-0">
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className={`flex items-center gap-2 rounded-lg bg-transparent transition ${menuColor}`}
                                        >
                                            <Icon icon="iconamoon:profile" className="h-4 w-4" />
                                            Profil
                                        </NavigationMenuTrigger>

                                        <NavigationMenuContent>
                                            <motion.ul
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="w-64 space-y-2 rounded-xl bg-background p-3"
                                            >
                                                <li>
                                                    <NavigationMenuLink
                                                        href="/profil"
                                                        className="block rounded-md p-4 text-sm hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        Profil
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink
                                                        href="/visi-misi"
                                                        className="block rounded-md p-4 text-sm hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        Visi & Misi
                                                    </NavigationMenuLink>
                                                </li>
                                            </motion.ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Viewport WAJIB */}
                                    <NavigationMenuViewport className="absolute top-full left-0 mt-2 w-full" />
                                </NavigationMenuList>
                            </NavigationMenu>

                            {/* Layanan Dropdown */}
                            <NavigationMenu className="relative">
                                <NavigationMenuList className="space-x-0">
                                    {/* Menu Layanan */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className={`flex items-center gap-2 rounded-lg bg-transparent transition ${menuColor}`}
                                        >
                                            <Icon icon="mdi:tools" className="h-4 w-4" />
                                            Layanan
                                        </NavigationMenuTrigger>

                                        <NavigationMenuContent>
                                            <motion.ul
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="w-64 space-y-2 rounded-xl bg-background p-3"
                                            >
                                                <li>
                                                    <NavigationMenuLink
                                                        href="/skck"
                                                        className="block rounded-md p-4 text-sm hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        SKCK
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink
                                                        href="/izin-keramaian"
                                                        className="block rounded-md p-4 text-sm hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        Izin Keramaian
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink
                                                        href="/sendak"
                                                        className="block rounded-md p-4 text-sm hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        Sendak
                                                    </NavigationMenuLink>
                                                </li>
                                            </motion.ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* Viewport WAJIB */}
                                    <NavigationMenuViewport className="absolute top-full left-0 mt-2 w-full" />
                                </NavigationMenuList>
                            </NavigationMenu>

                            {/* Berita */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/berita"
                                    className={`relative flex flex-row items-center gap-2 px-3 py-2 text-sm font-medium transition ${menuColor} hover:text-primary`}
                                >
                                    <Icon icon="mdi:newspaper-variant-outline" className="h-4 w-4" />
                                    Berita
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-500"
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Kontak */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/kontak"
                                    className={`relative flex flex-row items-center gap-2 px-3 py-2 text-sm font-medium transition ${menuColor} hover:text-primary`}
                                >
                                    <Icon icon="mdi:phone" className="h-4 w-4" />
                                    Kontak
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-500"
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <ThemeToggle />
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu */}
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
                                    <div className="mt-2 ml-4 flex flex-col gap-6">
                                        <a href="/profil" className="text-sm hover:text-primary">
                                            Profil
                                        </a>
                                        <a href="/visi-misi" className="text-sm hover:text-primary">
                                            Visi & Misi
                                        </a>
                                    </div>
                                </details>
                                <details>
                                    <summary className="cursor-pointer text-sm font-medium hover:text-primary">Layanan</summary>
                                    <div className="mt-2 ml-4 flex flex-col gap-6">
                                        <a href="/skck" className="text-sm hover:text-primary">
                                            SKCK
                                        </a>
                                        <a href="#" className="text-sm hover:text-primary">
                                            Izin Keramaian
                                        </a>
                                        <a href="#" className="text-sm hover:text-primary">
                                            Sendak
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
        </motion.nav>
    );
};

export default NavbarV3;
