export interface User {
    nickname: string;
    avatar: string;
    followers_count: number;
    followings_count: number;
    likes_count: number;
}

export interface VideoData {
    id: number;
    file_url: string;
    description: string;
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

