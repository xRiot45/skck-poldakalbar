export type NewsCategoryForm = {
    name: string;
};

export interface NewsCategory {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}
