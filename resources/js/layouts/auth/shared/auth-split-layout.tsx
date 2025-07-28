import ImageUrl from '@/assets/images/police-img.png';
import LogoIcon from '@/components/logo-icon';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const { name, quote } = usePage<SharedData>().props;

    return (
        <div className="relative grid h-full flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div
                className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r"
                style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black opacity-50" />
                <Link href={route('home')} className="relative z-20 flex items-center gap-4 text-lg font-medium">
                    <LogoIcon className="h-12 fill-current text-white" />
                    {name}
                </Link>
                {quote && (
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">&ldquo;{quote.message}&rdquo;</p>
                            <footer className="text-sm text-neutral-300">{quote.author}</footer>
                        </blockquote>
                    </div>
                )}
            </div>

            {/* Right Side */}
            <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 md:px-8">
                <div className="w-full max-w-md space-y-6">
                    <div className="flex justify-center">
                        <Link href={route('home')} className="flex items-center">
                            <LogoIcon className="h-12 fill-current text-black dark:text-white" />
                        </Link>
                    </div>
                    <div className="mb-10 space-y-4 text-center">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
