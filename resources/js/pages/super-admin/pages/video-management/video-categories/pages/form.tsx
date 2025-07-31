import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { VideoCategory, VideoCategoryForm } from '@/models/video-management/video-category';
import { BreadcrumbItem } from '@/types';
import { Icon } from '@iconify/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Video',
        href: '#',
    },
    {
        title: 'Kategori Video',
        href: '/super-admin/video-management/video-categories',
    },
    {
        title: 'Form Kategori Video',
        href: '#',
    },
];

export default function FormPage({ videoCategory }: { videoCategory: VideoCategory }) {
    const isEdit = !!videoCategory?.id;
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<VideoCategoryForm>>({
        name: isEdit ? videoCategory?.name : '',
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (isEdit) {
            put(route('super-admin.video-categories.update', { id: videoCategory?.id }), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Kategori Video Berhasil Diedit!',
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
            post(route('super-admin.video-categories.store'), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Kategori Video Berhasil Ditambahkan!',
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
            <Head title={isEdit ? 'Edit Kategori Video' : 'Tambah Kategori Video'} />
            <form onSubmit={handleSubmit} className="p-4">
                <Label htmlFor="name">
                    Kategori Video <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="name"
                    type="text"
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder="Masukkan Kategori Video"
                    className={cn('mt-2 rounded-md px-4 py-6', errors.name && 'border border-red-500')}
                />
                <InputError message={errors.name} className="mt-2" />

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.video-categories.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Kategori Video' : 'Tambah Kategori Video'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
