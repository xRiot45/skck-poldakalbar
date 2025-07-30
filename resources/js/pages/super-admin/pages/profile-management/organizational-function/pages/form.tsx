import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SuperAdminLayout from '@/layouts/super-admin';
import { cn } from '@/lib/utils';
import { OrganizationalFunction, OrganizationalFunctionForm } from '@/models/profile-management/organizational-function';
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
        title: 'Fungsi',
        href: '/super-admin/profile-management/organizational-function',
    },
    {
        title: 'Form Fungsi',
        href: '#',
    },
];

export default function FormPage({ organizationalFunction }: { organizationalFunction: OrganizationalFunction }) {
    const isEdit = !!organizationalFunction?.id;
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<OrganizationalFunctionForm>>({
        title: isEdit ? organizationalFunction?.title : '',
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (isEdit) {
            put(route('super-admin.organizational-function.update', { id: organizationalFunction?.id }), {
                onSuccess: () => {
                    toast.success('Success', {
                        description: 'Fungsi Berhasil Diedit!',
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
            post(route('super-admin.organizational-function.store'), {
                onSuccess: () => {
                    reset('title');
                    toast.success('Success', {
                        description: 'Fungsi Berhasil Ditambahkan!',
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
            <Head title={isEdit ? 'Edit Fungsi' : 'Tambah Fungsi'} />
            <form onSubmit={handleSubmit} className="p-4">
                <Label htmlFor="title">
                    Fungsi <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="title"
                    type="text"
                    autoFocus
                    tabIndex={1}
                    autoComplete="title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="Masukkan Fungsi"
                    className={cn('mt-2 rounded-md px-4 py-6', errors.title && 'border border-red-500')}
                />
                <InputError message={errors.title} className="mt-2" />

                <div className="mt-4 flex justify-end space-x-3">
                    <Link href={route('super-admin.organizational-function.index')}>
                        <Button variant="destructive" className="cursor-pointer">
                            Batalkan <Icon icon="iconoir:cancel" />
                        </Button>
                    </Link>
                    <Button type="submit" tabIndex={4} disabled={processing} className="cursor-pointer">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {isEdit ? 'Edit Fungsi' : 'Tambah Fungsi'} <Icon icon={isEdit ? 'material-symbols:edit' : 'heroicons:plus'} />
                    </Button>
                </div>
            </form>
        </SuperAdminLayout>
    );
}
