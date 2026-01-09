import dance from '$lib/assets/dance.mp4?url';
import type { VideoData } from '$lib/api/fetchVideo';

const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const syllables = [
	'ka', 'mi', 'lo', 'ra', 'ta', 'zu', 'be', 'ni', 'xo', 'yu',
	'pa', 'do', 'fi', 'ga', 'ha', 'ki', 'lu', 'mo', 'ne', 'sa'
];

const randomName = () => {
	const a = syllables[Math.floor(Math.random() * syllables.length)];
	const b = syllables[Math.floor(Math.random() * syllables.length)];
	return a + b;
};

export const mockVideoList: VideoData[] = Array.from(
	{ length: 12 },
	(_, i): VideoData => {
		const nickname = randomName();
		const avatarStyles = ['thumbs', 'bottts', 'notionists', 'lorelei'];

		return {
			id: i + 1,
			file_url: dance,
			description: `Mock video #${i + 1}`,
			likes_count: random(10, 50_000),
			comments_count: random(0, 3_000),
			shares_count: random(0, 1_000),
			user: {
				nickname,
				avatar: `https://api.dicebear.com/7.x/${avatarStyles[Math.floor(Math.random() * avatarStyles.length)]}/svg?seed=${nickname}`,
				followers_count: random(100, 100_000),
				followings_count: random(10, 5_000),
				likes_count: random(1_000, 1_000_000)
			}
		};
	}
);
