import { VideoCategory } from './video-category';

export type VideoForm = {
    title: string;
    youtube_video_id: string;
    youtube_url: string;
    description?: string;
    duration: string;
    video_category_id: number;
};

export interface Video {
    id: number;
    title: string;
    youtube_video_id: string;
    youtube_url: string;
    description?: string;
    duration: string;
    video_category_id: number;
    video_category: VideoCategory;
    created_at: string;
    updated_at: string;
}
