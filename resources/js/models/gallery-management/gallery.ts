import { StatusEnum } from '@/enums/status';
import { GalleryCategory } from './gallery-category';

export type GalleryForm = {
    title: string;
    image: string | File | null;
    gallery_category_id: number;
    status: StatusEnum;
};

export interface Gallery {
    id: number;
    title: string;
    slug: string;
    image: string;
    status: StatusEnum;
    created_at: string;
    updated_at: string;
    gallery_category_id: number;
    gallery_category: GalleryCategory;
}
