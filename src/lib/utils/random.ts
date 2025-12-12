export const getUniqueRandomIds = (count: number, max: number, existing: Set<number>) => {
    const ids = new Set<number>(existing);
    while (ids.size < existing.size + count) {
        ids.add(1 + Math.floor(Math.random() * max));
    }
    console.log(ids);
    return [...ids].filter(id => !existing.has(id));
};
