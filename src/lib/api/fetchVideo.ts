export interface User {
    nickname: string;
    avatar: string;
}

export interface VideoData {
    id: number;
    file_url: string;
    likes_count: number;
    comments_count: number;
    shares_count: number;
    user: User;
}

export function fetchVideo(id: number): Promise<VideoData | null> {
    return fetch(`https://tiktok.fullstack.edu.vn/api/videos/${id}`)
        .then(res => res.json())
        .then(json => json.data)
        .catch(() => null);
}

