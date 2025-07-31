import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { Video, VideoForm } from '@/models/video-management/video';
import { VideoCategory } from '@/models/video-management/video-category';
import { BreadcrumbItem } from '@/types';
import { Icon } from '@iconify/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Video',
        href: '#',
    },
    {
        title: 'Video',
        href: '/super-admin/video-management/videos',
    },
    {
        title: 'Form Video',
        href: '#',
    },
];

export default function FormPage({ video }: { video: Video }) {
    const isEdit = !!video?.id;

    const { videoCategories } = usePage<{ videoCategories: VideoCategory[] }>().props;
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<VideoForm>>({
        title: isEdit && video.title ? video.title : '',
        youtube_video_id: isEdit && video.youtube_video_id ? video.youtube_video_id : '',
        youtube_url: isEdit && video.youtube_url ? video.youtube_url : '',
        description: isEdit && video.description ? video.description : '',
        duration: isEdit && video.duration ? video.duration : '',
        video_category_id: isEdit && video.video_category_id ? video.video_category_id : 0,
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (isEdit) {
            put(route('super-admin.videos.update', { id: video?.id }), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Video Berhasil Diedit!',
                        action: {
                            label: 'Tutup',
                            onClick: () => toast.dismiss(),
                        },
                    });
                    reset();
                },
                onError: (error) => {
                    Object.keys(error).forEach((key) => {
                        toast.error('Error', {
                            description: error[key],
                            action: {
                                label: 'Tutup',
                                onClick: () => toast.dismiss(),
                            },
                        });
                    });
                },
            });
        } else {
            post(route('super-admin.videos.store'), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Video Berhasil Ditambahkan!',
                        action: {
                            label: 'Tutup',
                            onClick: () => toast.dismiss(),
                        },
                    });
                },
                onError: (error) => {
                    Object.keys(error).forEach((key) => {
                        toast.error('Error', {
                            description: error[key],
                            action: {
                                label: 'Tutup',
                                onClick: () => toast.dismiss(),
                            },
                        });
                    });
                },
            });
        }
    };

    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Edit Video' : 'Tambah Video'} />
            <form onSubmit={handleSubmit} className="space-y-4 p-4">
                {/* Title */}
                <div>
                    <Label htmlFor="title">
                        Judul <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="title"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Masukkan Judul Video"
                        className={cn('mt-2 rounded-md px-4 py-6', errors.title && 'border border-red-500')}
                    />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                {/* Youtube Video ID */}
                <div>
                    <Label htmlFor="youtube_video_id">
                        Video ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="youtube_video_id"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="youtube_video_id"
                        value={data.youtube_video_id}
                        onChange={(e) => setData('youtube_video_id', e.target.value)}
                        placeholder="Masukkan Video ID"
                        className={cn('mt-2 rounded-md px-4 py-6', errors.youtube_video_id && 'border border-red-500')}
                    />
                    <InputError message={errors.youtube_video_id} className="mt-2" />
                </div>

                {/* Youtube URL */}
                <div>
                    <Label htmlFor="youtube_url">
                        Video URL <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="youtube_url"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="youtube_url"
                        value={data.youtube_url}
                        onChange={(e) => setData('youtube_url', e.target.value)}
                        placeholder="Masukkan Video ID"
                        className={cn('mt-2 rounded-md px-4 py-6', errors.youtube_url && 'border border-red-500')}
                    />
                    <InputError message={errors.youtube_url} className="mt-2" />
                </div>

                {/* Duration */}
                <div>
                    <Label htmlFor="duration">
                        Durasi <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="duration"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="duration"
                        value={data.duration}
                        onChange={(e) => setData('duration', e.target.value)}
                        placeholder="Masukkan Durasi Video"
                        className={cn('mt-2 rounded-md px-4 py-6', errors.duration && 'border border-red-500')}
                    />
                    <InputError message={errors.duration} className="mt-2" />
                </div>

                {/* Video Category Id */}
                <div>
                    <Label htmlFor="video_category_id" className="mt-4">
                        Kategori Galeri <strong className="text-red-500">*</strong>
                    </Label>
                    <Select
                        onValueChange={(value) => setData('video_category_id', parseInt(value))}
                        value={data?.video_category_id ? String(data.video_category_id) : ''}
                    >
                        <SelectTrigger className={cn('mt-2 w-full rounded-lg py-6 shadow-none', errors.video_category_id && 'border border-red-500')}>
                            <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {videoCategories.map((item: VideoCategory) => (
                                <SelectItem key={item.id} value={String(item.id)} className="cursor-pointer p-3 capitalize">
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.video_category_id} className="mt-2" />
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description">
                        Deskripsi <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                        id="description"
                        autoFocus
                        tabIndex={1}
                        autoComplete="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Masukkan Deskripsi Video"
                        className={cn('mt-2 h-40 rounded-md px-4', errors.description && 'border border-red-500')}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.videos.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Video' : 'Tambah Video'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
