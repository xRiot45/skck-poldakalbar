import { Badge } from '@/components/ui/badge';
import { StatusEnum } from '@/enums/status';
import { cn } from '@/lib/utils';
import { News } from '@/models/news-management/news';
import { formatDate } from '@/utils/format-date';
import { statusMap } from '@/utils/status-map';
import { Icon } from '@iconify/react';
import { ColumnDef, Row } from '@tanstack/react-table';
import { DataTableColumnHeader } from './components/data-table-column-header';
import { DataTableRowActions } from './components/data-table-row-actions';

export const columns: ColumnDef<News>[] = [
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
        id: 'thumbnail',
        accessorKey: 'thumbnail',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Thumbnail" />,
        cell: ({ row }) => {
            const imageUrl = row.original.thumbnail;
            return (
                <div className="flex items-center">
                    {imageUrl ? (
                        <img src={imageUrl} alt="Gallery Image" className="h-32 rounded object-cover" />
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
        header: ({ column }) => <DataTableColumnHeader column={column} title="Judul Berita" />,
        cell: ({ row }) => <div className="max-w-[300px] break-words whitespace-normal">{row.getValue('title')}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'news_category',
        accessorFn: (row) => row.news_category?.name ?? '-',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Kategori Berita" />,
        cell: ({ row }) => <span className="max-w-36">{row.original.news_category?.name ?? '-'}</span>,
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
        id: 'is_highlight',
        accessorKey: 'is_highlight',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Highlight" />,
        cell: ({ row }) => {
            const isHighlight = row.getValue('is_highlight') as boolean;

            return (
                <Badge
                    variant="outline"
                    className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${
                        isHighlight ? 'border-blue-300 bg-blue-100 text-blue-700' : 'border-red-300 bg-red-100 text-red-700'
                    }`}
                >
                    <Icon icon={isHighlight ? 'material-symbols:star' : 'material-symbols:star-outline'} className="h-4 w-4" />
                    {isHighlight ? 'Sorotan' : 'Tidak Sorotan'}
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
        cell: ({ row }) => <DataTableRowActions row={row as Row<News>} />,
        enableHiding: false,
        enableSorting: false,
    },
];
