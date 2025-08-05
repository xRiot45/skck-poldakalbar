import FileDropzone from '@/components/file-dropzone';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StatusEnum } from '@/enums/status';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { Gallery, GalleryForm } from '@/models/gallery-management/gallery';
import { GalleryCategory } from '@/models/gallery-management/gallery-category';
import { BreadcrumbItem } from '@/types';
import { Icon } from '@iconify/react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Galeri',
        href: '#',
    },
    {
        title: 'Galeri',
        href: '/super-admin/gallery-management/gallery',
    },
    {
        title: 'Form Galeri',
        href: '#',
    },
];

export default function FormPage({ gallery }: { gallery: Gallery }) {
    const isEdit = !!gallery?.id;

    const { galleryCategories } = usePage<{ galleryCategories: GalleryCategory[] }>().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<GalleryForm>>({
        title: isEdit ? gallery?.title : '',
        image: isEdit ? gallery?.image : null,
        gallery_category_id: isEdit ? gallery?.gallery_category_id : 0,
        status: isEdit ? gallery?.status : StatusEnum.DRAFT,
    });

    const handleFileChange = (file: File | null) => {
        setData('image', file);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const formData = new FormData();
        const appendFormData = (key: string, value: GalleryForm[keyof GalleryForm]) => {
            if (value instanceof File) {
                formData.append(key, value);
            } else if (typeof value === 'string' || typeof value === 'number') {
                formData.append(key, String(value));
            }
        };

        if (isEdit && gallery) {
            Object.entries(data).forEach(([key, value]) => {
                const originalValue = gallery[key as keyof Gallery];

                if (key === 'image') {
                    if (value instanceof File) {
                        appendFormData(key, value);
                    }
                } else {
                    if (value !== originalValue) {
                        appendFormData(key, value);
                    }
                }
            });

            formData.append('_method', 'PUT');
            router.post(route('super-admin.galleries.update', { id: gallery?.id }), formData, {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Galeri Berhasil Diedit!',
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

            post(route('super-admin.galleries.store'), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Galeri Berhasil Ditambahkan!',
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
            <Head title={isEdit ? 'Edit Galeri' : 'Tambah Galeri'} />
            <form onSubmit={handleSubmit} className="space-y-4 p-4">
                {/* Title */}
                <div>
                    <Label htmlFor="title">
                        Judul Galeri <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="title"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Masukkan Judul Galeri"
                        className={cn('mt-2 rounded-md px-4 py-6', errors.title && 'border border-red-500')}
                    />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                {/* Kategori Galeri */}
                <div>
                    <Label htmlFor="gallery_category_id" className="mt-4">
                        Kategori Galeri <strong className="text-red-500">*</strong>
                    </Label>
                    <Select
                        onValueChange={(value) => setData('gallery_category_id', parseInt(value))}
                        value={data?.gallery_category_id ? String(data.gallery_category_id) : ''}
                    >
                        <SelectTrigger
                            className={cn('mt-2 w-full rounded-lg py-6 shadow-none', errors.gallery_category_id && 'border border-red-500')}
                        >
                            <SelectValue placeholder="Pilih Kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {galleryCategories.map((item: GalleryCategory) => (
                                <SelectItem key={item.id} value={String(item.id)} className="cursor-pointer p-3 capitalize">
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.gallery_category_id} className="mt-2" />
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

                {/* Image */}
                <div>
                    <Label htmlFor="image">
                        Galeri <strong className="text-red-500">*</strong>
                    </Label>
                    <FileDropzone
                        onFileChange={handleFileChange}
                        error={errors.image}
                        initialImage={data.image instanceof File ? undefined : data.image}
                    />
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.galleries.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Galeri' : 'Tambah Galeri'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
