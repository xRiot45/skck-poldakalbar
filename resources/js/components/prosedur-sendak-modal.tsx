import Banner1 from '@/assets/images/banners/sendak/banner-1.png';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Icon } from '@iconify/react';
import { ScrollArea } from './ui/scroll-area';

export default function ProsedurSendakModal() {
    const prosedurImages = [Banner1];

    return (
        <Dialog>
            {/* Trigger Modal */}
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    variant="default"
                    className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 py-6 text-white transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600"
                >
                    <Icon icon="mdi:file-document-outline" className="h-5 w-5" />
                    Lihat Prosedur Sendak
                </Button>
            </DialogTrigger>

            {/* Konten Modal */}
            <DialogContent className="border border-gray-200 bg-white text-gray-900 sm:max-w-7xl dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Prosedur Pembuatan Sendak</DialogTitle>
                </DialogHeader>

                {/* Scroll Area */}
                <ScrollArea className="h-[700px] w-full rounded-md">
                    <div className="flex flex-col gap-8">
                        {prosedurImages.map((img, index) => (
                            <div key={index} className="overflow-hidden rounded-lg border border-gray-200 shadow dark:border-gray-700">
                                <img src={img} alt={`Prosedur ${index + 1}`} className="h-full w-full object-cover" />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
