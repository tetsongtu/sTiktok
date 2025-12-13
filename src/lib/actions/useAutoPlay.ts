import { activeVideoId } from '$lib/stores/activeVideo';

let interacted = false;

export function useAutoPlay(video: HTMLVideoElement) {
    const observer = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
            video.play();
            if (interacted) video.muted = false;
            activeVideoId.set(Number(video.dataset.videoId ?? 0));
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
