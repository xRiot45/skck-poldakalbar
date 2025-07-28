import Logo from '@/assets/images/logo_1.png';

export default function LogoIcon({ className }: { className?: string }) {
    return (
        <>
            <img src={Logo} alt="Logo Icon" className={className} />
        </>
    );
}
