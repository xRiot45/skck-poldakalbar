import { Badge } from '@/components/ui/badge';
import { StatusEnum } from '@/enums/status';
import { cn } from '@/lib/utils';
import { Gallery } from '@/models/gallery-management/gallery';
import { formatDate } from '@/utils/format-date';
import { statusMap } from '@/utils/status-map';
import { Icon } from '@iconify/react';
import { ColumnDef, Row } from '@tanstack/react-table';
import { DataTableColumnHeader } from './components/data-table-column-header';
import { DataTableRowActions } from './components/data-table-row-actions';

export const columns: ColumnDef<Gallery>[] = [
    {
        id: 'no',
        accessorKey: 'no',
        header: ({ column }) => <DataTableColumnHeader column={column} title="No" />,
        cell: ({ row }) => <span className="text-sm text-gray-600 dark:text-gray-200">{row.index + 1}</span>,
        meta: {
            className: cn('p-4 ps-8'),
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'image',
        accessorKey: 'image',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Galeri" />,
        cell: ({ row }) => {
            const imageUrl = row.original.image;
            return (
                <div className="flex items-center">
                    {imageUrl ? (
                        <img src={imageUrl} alt="Gallery Image" className="w-3h-32 h-32 rounded object-cover" />
                    ) : (
                        <span className="text-sm text-gray-500">Tidak ada gambar</span>
                    )}
                </div>
            );
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'title',
        accessorKey: 'title',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nama Galeri" />,
        cell: ({ row }) => <div className="max-w-[300px] break-words whitespace-normal">{row.getValue('title')}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'gallery_category',
        accessorFn: (row) => row.gallery_category?.name ?? '-',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Kategori Galeri" />,
        cell: ({ row }) => <span className="max-w-36">{row.original.gallery_category?.name ?? '-'}</span>,
        enableHiding: false,
        enableSorting: false,
    },
    {
        id: 'status',
        accessorKey: 'status',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        cell: ({ row }) => {
            const status = row.getValue('status') as StatusEnum;
            const statusData = statusMap[status];

            return (
                <Badge variant="outline" className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${statusData.className}`}>
                    <Icon icon={statusData.icon} className="h-4 w-4" />
                    {statusData.label}
                </Badge>
            );
        },
        enableHiding: false,
        enableSorting: false,
    },
    {
        id: 'created_at',
        accessorKey: 'created_at',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Dibuat Pada" />,
        cell: ({ row }) => <span className="max-w-36">{formatDate(row.getValue('created_at'))}</span>,
        enableHiding: true,
        enableSorting: true,
    },
    {
        id: 'updated_at',
        accessorKey: 'updated_at',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Diubah Pada" />,
        cell: ({ row }) => <span className="max-w-36">{formatDate(row.getValue('updated_at'))}</span>,
        enableHiding: true,
        enableSorting: true,
    },
    {
        id: 'actions',
        accessorKey: 'actions',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Aksi" />,
        cell: ({ row }) => <DataTableRowActions row={row as Row<Gallery>} />,
        enableHiding: false,
        enableSorting: false,
    },
];
