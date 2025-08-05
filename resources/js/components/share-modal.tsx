import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { News } from '@/models/news-management/news';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function ShareModal({ news }: { news: News }) {
    const [copied, setCopied] = useState(false);
    const shareUrl = `${window.location.origin}/news/${news?.slug}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Dialog>
            {/* Trigger Button */}
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
                    <Icon icon="mdi:share-variant" className="h-4 w-4" />
                    Bagikan
                </Button>
            </DialogTrigger>

            {/* Modal Content */}
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-start text-lg font-semibold">Bagikan Berita</DialogTitle>
                    <DialogDescription className="text-start">Salin tautan atau bagikan ke media sosial</DialogDescription>
                </DialogHeader>

                {/* Link + Copy Button */}
                <div className="flex items-center gap-2">
                    <Input value={shareUrl} readOnly className="flex-1" />
                    <Button variant="outline" onClick={handleCopy}>
                        {copied ? 'Disalin!' : 'Salin'}
                    </Button>
                </div>

                {/* Social Share Buttons */}
                <div className="mt-5 flex justify-center gap-6">
                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(news?.title + ' ' + shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600"
                    >
                        <Icon icon="mdi:whatsapp" className="h-5 w-5" />
                    </a>

                    {/* Twitter */}
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(news?.title)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600"
                    >
                        <Icon icon="mdi:twitter" className="h-5 w-5" />
                    </a>

                    {/* Facebook */}
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800"
                    >
                        <Icon icon="mdi:facebook" className="h-5 w-5" />
                    </a>

                    {/* Telegram */}
                    <a
                        href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(news?.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-white hover:bg-sky-500"
                    >
                        <Icon icon="mdi:telegram" className="h-5 w-5" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                        <Icon icon="mdi:linkedin" className="h-5 w-5" />
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:?subject=${encodeURIComponent(news?.title)}&body=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
                    >
                        <Icon icon="mdi:email" className="h-5 w-5" />
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
