import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { Vision, VisionForm } from '@/models/profile-management/vision';
import { BreadcrumbItem } from '@/types';
import { Icon } from '@iconify/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Profil',
        href: '#',
    },
    {
        title: 'Visi',
        href: '/super-admin/profile-management/vision',
    },
    {
        title: 'Form Visi',
        href: '#',
    },
];

export default function FormPage({ vision }: { vision: Vision }) {
    const isEdit = !!vision?.id;
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<VisionForm>>({
        title: isEdit ? vision?.title : '',
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (isEdit) {
            put(route('super-admin.vision.update', { id: vision?.id }), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Visi Berhasil Diedit!',
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
            post(route('super-admin.vision.store'), {
                onSuccess: () => {
                    reset('title');
                    toast.success('Success', {
                        description: 'Visi Berhasil Ditambahkan!',
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
            <Head title={isEdit ? 'Edit Visi' : 'Tambah Visi'} />
            <form onSubmit={handleSubmit} className="p-4">
                <Label htmlFor="title">
                    Visi <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="title"
                    type="text"
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="Masukkan visi"
                    className={cn('mt-2 rounded-md px-4 py-6', errors.title && 'border border-red-500')}
                />
                <InputError message={errors.title} className="mt-2" />

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.vision.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Visi' : 'Tambah Visi'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
