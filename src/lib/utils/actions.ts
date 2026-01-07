import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-svelte';
import { type VideoData } from '$lib/api/fetchVideo';
import { comment } from '$lib/stores/index.svelte';
import { goto } from '$app/navigation';

export function createVideoActions(data: VideoData) {

    function gotoProfile() {
        goto(`/@${data.user.nickname}?video=${data.id}`);
    }

    return [
        {
            type: 'profile',
            label: data.user.nickname,
            onClick: gotoProfile
        },
        {
            icon: Heart,
            label: data.likes_count
        },
        {
            icon: MessageCircle,
            label: data.comments_count,
            onClick: () => (comment.open = !comment.open)
        },
        {
            icon: Bookmark,
            label: 'bookmark'
        },
        {
            icon: Share2,
            label: data.shares_count
        }
    ]
}