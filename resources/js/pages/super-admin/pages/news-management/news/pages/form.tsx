import FileDropzone from '@/components/file-dropzone';
import InputError from '@/components/input-error';
import RichTextEditor from '@/components/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { StatusEnum } from '@/enums/status';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { GalleryCategory } from '@/models/gallery-management/gallery-category';
import { News, NewsForm } from '@/models/news-management/news';
import { NewsCategory } from '@/models/news-management/news-category';
import { BreadcrumbItem } from '@/types';
import { Icon } from '@iconify/react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Berita',
        href: '#',
    },
    {
        title: 'Berita',
        href: '/super-admin/news-management/news',
    },
    {
        title: 'Form Berita',
        href: '#',
    },
];

export default function FormPage({ news }: { news: News }) {
    const isEdit = !!news?.id;

    const { newsCategories } = usePage<{ newsCategories: NewsCategory[] }>().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<NewsForm>>({
        title: isEdit ? news?.title : '',
        content: isEdit ? news?.content : '',
        thumbnail: isEdit ? news?.thumbnail : null,
        news_category_id: isEdit ? news?.news_category_id : 0,
        status: isEdit ? news?.status : StatusEnum.DRAFT,
        is_highlight: isEdit ? news?.is_highlight : false,
    });

    const handleFileChange = (file: File | null) => {
        setData('thumbnail', file);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const appendFormData = (key: string, value: NewsForm[keyof NewsForm]) => {
            if (value instanceof File) {
                formData.append(key, value);
            } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                formData.append(key, String(value));
            }
        };

        if (isEdit && news) {
            Object.entries(data).forEach(([key, value]) => {
                const originalValue = news[key as keyof News];

                if (String(value) !== String(originalValue)) {
                    appendFormData(key, value);
                }
            });

            formData.append('_method', 'PUT');
            router.post(route('super-admin.news.update', { id: news?.id }), formData, {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Berita Berhasil Diedit!',
                        action: { label: 'Tutup', onClick: () => toast.dismiss() },
                    });
                    reset();
                },
                onError: (errors) => {
                    Object.keys(errors).forEach((key) => {
                        toast.error('Error', {
                            description: errors[key],
                            action: { label: 'Tutup', onClick: () => toast.dismiss() },
                        });
                    });
                },
            });
        } else {
            Object.entries(data).forEach(([key, value]) => {
                appendFormData(key, value);
            });

            post(route('super-admin.news.store'), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Berita Berhasil Ditambahkan!',
                        action: { label: 'Tutup', onClick: () => toast.dismiss() },
                    });
                },
                onError: (error) => {
                    Object.keys(error).forEach((key) => {
                        toast.error('Error', {
                            description: error[key],
                            action: { label: 'Tutup', onClick: () => toast.dismiss() },
                        });
                    });
                },
            });
        }
    };

    return (
        <SuperAdminLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Edit Berita' : 'Tambah Berita'} />
            <form onSubmit={handleSubmit} className="space-y-4 p-4">
                {/* Title */}
                <div>
                    <Label htmlFor="title">
                        Judul Berita <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="title"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Masukkan Judul Berita"
                        className={cn('mt-2 rounded-md px-4 py-6', errors.title && 'border border-red-500')}
                    />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                {/* Kategori Berita */}
                <div>
                    <Label htmlFor="news_category_id" className="mt-4">
                        Kategori Berita <strong className="text-red-500">*</strong>
                    </Label>
                    <Select
                        onValueChange={(value) => setData('news_category_id', parseInt(value))}
                        value={data?.news_category_id ? String(data.news_category_id) : ''}
                    >
                        <SelectTrigger className={cn('mt-2 w-full rounded-lg py-6 shadow-none', errors.news_category_id && 'border border-red-500')}>
                            <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {newsCategories.map((item: GalleryCategory) => (
                                <SelectItem key={item.id} value={String(item.id)} className="cursor-pointer p-3 capitalize">
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.news_category_id} className="mt-2" />
                </div>

                {/* Status */}
                <div>
                    <Label htmlFor="status" className="mt-4">
                        Status <strong className="text-red-500">*</strong>
                    </Label>
                    <Select onValueChange={(value) => setData('status', value as StatusEnum)} value={data?.status || ''}>
                        <SelectTrigger className={cn('mt-2 w-full rounded-lg py-6 shadow-none', errors.status && 'border border-red-500')}>
                            <SelectValue placeholder="Pilih Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.values(StatusEnum).map((status) => (
                                <SelectItem key={status} value={status} className="cursor-pointer p-3 capitalize">
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.status} className="mt-2" />
                </div>

                {/* Thumbnail */}
                <div>
                    <Label htmlFor="thumbnail">
                        Thumbnail <strong className="text-red-500">*</strong>
                    </Label>
                    <FileDropzone
                        onFileChange={handleFileChange}
                        error={errors.thumbnail}
                        initialImage={data.thumbnail instanceof File ? undefined : data.thumbnail}
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>

                {/* Content */}
                <div>
                    <Label htmlFor="title">
                        Konten Berita <span className="text-red-500">*</span>
                    </Label>
                    <RichTextEditor value={data.content} onChangeAction={(value) => setData('content', value)} error={errors.content} />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                {/* Is Highlight */}
                <div className="flex items-center gap-2">
                    <Switch checked={data.is_highlight} onCheckedChange={(value) => setData('is_highlight', value)} />
                    <Label htmlFor="is_highlight">Tandai sebagai Sorotan</Label>
                    <InputError message={errors.is_highlight} className="mt-2" />
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.news.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Berita' : 'Tambah Berita'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
