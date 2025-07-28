import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { Mission, MissionForm } from '@/models/profile-management/mission';
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
        title: 'Misi',
        href: '/super-admin/profile-management/mission',
    },
    {
        title: 'Form Misi',
        href: '#',
    },
];

export default function FormPage({ mission }: { mission: Mission }) {
    const isEdit = !!mission?.id;
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<MissionForm>>({
        title: isEdit ? mission?.title : '',
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (isEdit) {
            put(route('super-admin.mission.update', { id: mission?.id }), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Misi Berhasil Diedit!',
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
            post(route('super-admin.mission.store'), {
                onSuccess: () => {
                    reset('title');
                    toast.success('Success', {
                        description: 'Misi Berhasil Ditambahkan!',
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
            <Head title={isEdit ? 'Edit Misi' : 'Tambah Misi'} />
            <form onSubmit={handleSubmit} className="p-4">
                <Label htmlFor="title">
                    Misi <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="title"
                    type="text"
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="Masukkan Misi"
                    className={cn('mt-2 rounded-md px-4 py-6', errors.title && 'border border-red-500')}
                />
                <InputError message={errors.title} className="mt-2" />

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.mission.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Misi' : 'Tambah Misi'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
