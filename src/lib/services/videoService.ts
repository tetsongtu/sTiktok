import { fetchVideo, type VideoData } from '$lib/api/fetchVideo';
import { getMockVideoList } from '$lib/data/mockVideos';
import { getUniqueRandomIds } from '$lib/utils/random';

export const pickVideoIds = (count: number, max: number, existing: Set<number>) => {
    return getUniqueRandomIds(count, max, existing);
};

// FETCH VIDEOS BY 
export const fetchVideosByIds = async (ids: number[]): Promise<VideoData[]> => {
    // const fetched = await Promise.all(ids.map(fetchVideo));
    const fetched = await Promise.all(ids.map(fetchVideoMock));
    return fetched.filter((v): v is VideoData => !!v);
};

export const fetchVideoMock = async (id: number): Promise<VideoData | null> => {
    return getMockVideoList().find(v => v.id === id) ?? null;
};

// LOAD NEXT VIDEO BATCH
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
