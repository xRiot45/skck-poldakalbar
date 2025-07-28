import HydrogenLayout from '@/layouts/super-admin/shared/layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface SuperAdminLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function SuperAdminLayout({ children, breadcrumbs, ...props }: SuperAdminLayoutProps) {
    return (
        <HydrogenLayout breadcrumbs={breadcrumbs} {...props}>
            {children}
        </HydrogenLayout>
    );
}
