import HydrogenLayout from '@/layouts/admin/shared/layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({ children, breadcrumbs, ...props }: AdminLayoutProps) {
    return (
        <HydrogenLayout breadcrumbs={breadcrumbs} {...props}>
            {children}
        </HydrogenLayout>
    );
}
