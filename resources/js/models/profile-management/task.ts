export type TaskForm = {
    title: string;
};

export interface Task {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
}
