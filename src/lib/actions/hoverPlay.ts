export const hoverPlay = (node: HTMLVideoElement) => {
    const play = () => node.play();
    const pause = () => node.pause();

    node.addEventListener('mouseenter', play);
    node.addEventListener('mouseleave', pause);

    return {
        destroy: () => {
            node.removeEventListener('mouseenter', play);
            node.removeEventListener('mouseleave', pause);
        }
    };
};
