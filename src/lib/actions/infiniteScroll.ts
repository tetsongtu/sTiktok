export function infiniteScroll(
    node: HTMLElement,
    callback?: () => void,
    enabled = true
) {
    if (!enabled || !callback) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) callback();
        },
        { rootMargin: '500px' }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
