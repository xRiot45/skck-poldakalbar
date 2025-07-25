import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAppearance } from '@/hooks/use-appearance';
import { Computer, MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { appearance, updateAppearance } = useAppearance();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Cek scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update mode berdasarkan appearance
    useEffect(() => {
        setIsDarkMode(appearance === 'dark');
    }, [appearance]);

    // Class icon adaptif
    const iconClass = `h-5 w-5 transition-colors ${!isDarkMode && !isScrolled ? 'text-white' : 'text-foreground'}`;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                    {appearance === 'dark' ? <MoonIcon className={iconClass} /> : <SunIcon className={iconClass} />}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="mt-4 w-64 rounded-lg bg-background p-2 text-foreground shadow-lg">
                <DropdownMenuItem onClick={() => updateAppearance('light')} className="cursor-pointer p-3">
                    <SunIcon className="mr-2 h-4 w-4 text-foreground" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => updateAppearance('dark')} className="cursor-pointer p-3">
                    <MoonIcon className="mr-2 h-4 w-4 text-foreground" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => updateAppearance('system')} className="cursor-pointer p-3">
                    <Computer className="mr-2 h-4 w-4 text-foreground" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
