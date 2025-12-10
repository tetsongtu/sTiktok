export function useAutoPlay(node: HTMLVideoElement) {
    let userPaused = false; // user tự bấm pause

    const observer = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !userPaused) node.play();
        else node.pause();
    }, { threshold: 0.6 });

    observer.observe(node);

    // toggle play/pause
    const toggle = () => {
        userPaused = !node.paused;
        userPaused ? node.pause() : node.play();
    };

    node.addEventListener("click", toggle);

    return {
        destroy() {
            observer.disconnect();
            node.removeEventListener("click", toggle);
        }
    };
}
