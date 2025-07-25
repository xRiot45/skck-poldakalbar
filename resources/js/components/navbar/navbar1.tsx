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
import { Menu } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from '../theme-toggle';

const NavbarV1 = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-transparent">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={LogoIcon} alt="Logo" className="h-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                    <div>
                        <h1 className="text-sm font-bold tracking-wide text-white/90 uppercase">Direktorat Intelijen Keamanan</h1>
                        <span className="font-bold text-white uppercase">Polda Kalbar</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-2">
                            {/* Beranda */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                                >
                                    Beranda
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Profil Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="rounded-lg bg-transparent text-white/80 hover:bg-white/10 hover:text-white">
                                    Profil
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-xl border-transparent bg-gray-900 shadow-xl ring-1 ring-white/10">
                                    <ul className="w-40 space-y-2 p-3">
                                        <li>
                                            <NavigationMenuLink
                                                href="/profil"
                                                className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                            >
                                                Profil
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink
                                                href="/visi"
                                                className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                            >
                                                Visi & Misi
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Layanan Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="rounded-lg bg-transparent text-white/80 hover:bg-white/10 hover:text-white">
                                    Layanan
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-white/10">
                                    <ul className="w-40 space-y-2 p-3">
                                        <li>
                                            <NavigationMenuLink
                                                href="/skck"
                                                className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                            >
                                                SKCK
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                            >
                                                Izin Keramaian
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                            >
                                                Sendak
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Berita */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#"
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                    Berita
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Kontak */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/kontak"
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                    Kontak
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <ThemeToggle />
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10 hover:text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="animate-fade-in-down bg-gray-900/95 shadow-lg backdrop-blur-lg md:hidden">
                    <ul className="space-y-3 p-4">
                        <li>
                            <a href="#" className="block py-2 text-white/80 transition hover:translate-x-1 hover:text-white">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <details className="group">
                                <summary className="cursor-pointer py-2 text-white/80 transition hover:text-white">Profil</summary>
                                <ul className="mt-1 space-y-1 pl-4">
                                    <li>
                                        <a href="#" className="block py-1 text-sm text-white/80 hover:text-white">
                                            Profil
                                        </a>
                                        <a href="#" className="block py-1 text-sm text-white/80 hover:text-white">
                                            Visi
                                        </a>
                                        <a href="#" className="block py-1 text-sm text-white/80 hover:text-white">
                                            Misi
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details className="group">
                                <summary className="cursor-pointer py-2 text-white/80 transition hover:text-white">Layanan</summary>
                                <ul className="mt-1 space-y-1 pl-4">
                                    <li>
                                        <a href="#" className="block py-1 text-sm text-white/80 hover:text-white">
                                            SKCK
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-1 text-sm text-white/80 hover:text-white">
                                            Izin Keramaian
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-white/80 transition hover:translate-x-1 hover:text-white">
                                Halaman Berita
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-white/80 transition hover:translate-x-1 hover:text-white">
                                Kontak
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavbarV1;
