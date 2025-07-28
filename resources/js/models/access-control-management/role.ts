export type RoleForm = {
    name: string;
};

export interface Role {
    id: number;
    name: string;
    created_at?: string;
    updated_at?: string;
}
