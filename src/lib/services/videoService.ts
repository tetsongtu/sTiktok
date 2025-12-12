import { fetchVideo, type VideoData } from '$lib/api/fetchVideo';
import { getUniqueRandomIds } from '$lib/utils/random';

export const pickVideoIds = (count: number, max: number, existing: Set<number>) => {
    return getUniqueRandomIds(count, max, existing);
};

export const fetchVideosByIds = async (ids: number[]): Promise<VideoData[]> => {
    const fetched = await Promise.all(ids.map(fetchVideo));
    return fetched.filter((v): v is VideoData => !!v);
};

export const loadNextVideoBatch = async (
    videos: VideoData[],
    count: number,
    max: number
): Promise<VideoData[]> => {
    const existingIds = new Set(videos.map(v => v.id));
    const ids = pickVideoIds(count, max, existingIds);
    const newVideos = await fetchVideosByIds(ids);
    return [...videos, ...newVideos];
};
