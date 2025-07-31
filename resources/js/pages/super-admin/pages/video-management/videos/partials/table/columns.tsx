import { cn } from '@/lib/utils';
import { Video } from '@/models/video-management/video';
import { formatDate } from '@/utils/format-date';
import { ColumnDef, Row } from '@tanstack/react-table';
import { DataTableColumnHeader } from './components/data-table-column-header';
import { DataTableRowActions } from './components/data-table-row-actions';

export const columns: ColumnDef<Video>[] = [
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
            const videoId = row.original.youtube_video_id;
            return (
                <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt={row.original.title} className="h-[100px] object-cover" />
            );
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'title',
        accessorKey: 'title',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Judul Video" />,
        cell: ({ row }) => <div className="max-w-[300px] break-words whitespace-normal">{row.getValue('title')}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    // {
    //     id: 'youtube_video_id',
    //     accessorKey: 'youtube_video_id',
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Video ID" />,
    //     cell: ({ row }) => <div className="max-w-[300px] break-words whitespace-normal">{row.getValue('youtube_video_id')}</div>,
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    // {
    //     id: 'youtube_url',
    //     accessorKey: 'youtube_url',
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Video URL" />,
    //     cell: ({ row }) => <div className="max-w-[300px] break-words whitespace-normal">{row.getValue('youtube_url')}</div>,
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        id: 'duration',
        accessorKey: 'duration',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Durasi Video" />,
        cell: ({ row }) => <div className="max-w-[300px] break-words whitespace-normal">{row.getValue('duration')}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'video_category',
        accessorFn: (row) => row.video_category?.name ?? '-',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Kategori Video" />,
        cell: ({ row }) => <span className="max-w-36">{row.original.video_category?.name ?? '-'}</span>,
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
        cell: ({ row }) => <DataTableRowActions row={row as Row<Video>} />,
        enableHiding: false,
        enableSorting: false,
    },
];
