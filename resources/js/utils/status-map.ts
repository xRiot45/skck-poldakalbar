import { StatusEnum } from '@/enums/status';

export const statusMap: Record<StatusEnum, { label: string; className: string; icon: string }> = {
    [StatusEnum.DRAFT]: {
        label: 'Draft',
        className: 'bg-gray-100 border border-gray-600 text-gray-600',
        icon: 'mdi:file-document-edit-outline',
    },
    [StatusEnum.PUBLISHED]: {
        label: 'Dipublikasikan',
        className: 'bg-green-100 border border-green-600 text-green-600',
        icon: 'mdi:check-circle-outline',
    },
    [StatusEnum.ARCHIVED]: {
        label: 'Diarsipkan',
        className: 'bg-yellow-100 border border-yellow-600 text-yellow-600',
        icon: 'mdi:archive-outline',
    },
};
