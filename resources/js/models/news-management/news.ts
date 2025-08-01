import { StatusEnum } from '@/enums/status';
import { NewsCategory } from './news-category';

export type NewsForm = {
    title: string;
    content: string;
    thumbnail: string | File | null;
    news_category_id: number;
    status: StatusEnum;
    is_highlight: boolean;
};

export interface News {
    id: number;
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    status: StatusEnum;
    is_highlight: boolean;
    views: number;
    created_at: string;
    updated_at: string;
    news_category_id: number;
    news_category: NewsCategory;
}
