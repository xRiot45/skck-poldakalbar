import LogoIcon from '@/assets/images/logo_1.png';
import ThemeToggle from '@/components/theme-toggle';
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
import { NAVBAR_ITEMS } from './nav-items';

const Navbar = () => {
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
                            {NAVBAR_ITEMS.map((item) =>
                                item.children ? (
                                    <NavigationMenu className="relative" key={item.label}>
                                        <NavigationMenuList className="space-x-0">
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger
                                                    className={`flex items-center gap-2 rounded-lg bg-transparent transition ${menuColor}`}
                                                >
                                                    {item.icon && <Icon icon={item.icon} className="h-4 w-4" />}
                                                    {item.label}
                                                </NavigationMenuTrigger>

                                                <NavigationMenuContent>
                                                    <motion.ul
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="w-64 space-y-2 rounded-xl bg-background p-3"
                                                    >
                                                        {item.children.map((child) => (
                                                            <li key={child.label}>
                                                                <NavigationMenuLink
                                                                    href={child.href || '#'}
                                                                    className="block rounded-md p-4 text-sm hover:bg-accent hover:text-accent-foreground"
                                                                >
                                                                    {child.label}
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                            <NavigationMenuViewport className="absolute top-full left-0 mt-2 w-full" />
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                ) : (
                                    <NavigationMenuItem key={item.label}>
                                        <NavigationMenuLink
                                            href={item.href || '#'}
                                            className={`relative flex flex-row items-center gap-2 px-3 py-2 text-sm font-medium transition ${menuColor} hover:text-primary`}
                                        >
                                            {item.icon && <Icon icon={item.icon} className="h-4 w-4" />}
                                            {item.label}
                                            <motion.span
                                                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-500"
                                                whileHover={{ width: '100%' }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ),
                            )}
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
                                {NAVBAR_ITEMS.map((item) =>
                                    item.children ? (
                                        <details key={item.label}>
                                            <summary className="cursor-pointer text-sm font-medium hover:text-primary">{item.label}</summary>
                                            <div className="mt-2 ml-4 flex flex-col gap-6">
                                                {item.children.map((child) => (
                                                    <a key={child.label} href={child.href || '#'} className="text-sm hover:text-primary">
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </details>
                                    ) : (
                                        <a key={item.label} href={item.href || '#'} className="text-sm font-medium hover:text-primary">
                                            {item.label}
                                        </a>
                                    ),
                                )}

                                <ThemeToggle />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
