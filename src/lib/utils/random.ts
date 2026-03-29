export const getUniqueRandomIds = (count: number, max: number, existing: Set<number>) => {
    // Get all available IDs that haven't been used yet
    const availableIds = Array.from({ length: max }, (_, i) => i + 1)
        .filter(id => !existing.has(id));
    
    // Can't pick more than what's available
    const pickCount = Math.min(count, availableIds.length);
    
    // Fisher-Yates shuffle to pick random IDs efficiently
    for (let i = availableIds.length - 1; i > availableIds.length - pickCount - 1; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [availableIds[i], availableIds[randomIndex]] = [availableIds[randomIndex], availableIds[i]];
    }
    
    // Return the last 'pickCount' items (they're shuffled)
    return availableIds.slice(-pickCount);
};
