function mostCommonWord(paragraph, banned) {
    const map = new Map();
    const set = new Set(banned);
    
    paragraph.toLowerCase().split(/[ !?',;.]+/).forEach(word => {
        if (word && !set.has(word)) {
            map.set(word, (map.get(word) || 0) + 1);
        }
    });
    
    return [...map.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0];
}
