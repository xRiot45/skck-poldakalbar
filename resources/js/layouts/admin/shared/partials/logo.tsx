import LogoIcon from '@/components/logo-icon';

export default function Logo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md">
                <LogoIcon />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <h1 className="text-xs font-bold tracking-wide uppercase">
                    Direktorat Intelijen Keamanan <br />
                    Polda Kalbar
                </h1>
            </div>
        </>
    );
}
