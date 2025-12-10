export function useAutoPlay(video: HTMLVideoElement) {
    let isPaused = false;

    // auto play
    const observer = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !isPaused) video.play();
        else video.pause();
    }, { threshold: 0.6 });

    observer.observe(video);

    // toggle play/pause
    const toggle = () => {
        isPaused = !isPaused;
        isPaused ? video.pause() : video.play();
    };

    video.addEventListener("click", toggle);

    return {
        destroy() {
            observer.disconnect();
            video.removeEventListener("click", toggle);
        }
    };
}
