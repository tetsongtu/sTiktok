import { activeVideo } from '$lib/stores/index.svelte';

let interacted = false;

export function useAutoPlay(video: HTMLVideoElement) {
    const observer = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
            video.play();
            if (interacted) video.muted = false;
            activeVideo.id = Number(video.dataset.videoId ?? 0);
        } else {
            video.pause();
        }
    }, { threshold: 0.6 });
    observer.observe(video);

    if (!interacted) {
        const unmute = () => {
            video.muted = false;
            interacted = true;
            document.removeEventListener("click", unmute);
            console.log("Unmuted");
        }
        document.addEventListener("click", unmute);
    }

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
