function solution(sentence, n) {
    if (typeof sentence !== "string") throw new Error("sentence must be a string");
    if (typeof n !== "number") throw new Error("sentence must be a number");


    const array = sentence.split(" ");
    const map = new Map();

    for (const item of array) {
        if (!item) continue;
        map.set(item, (map.get(item) || 0) + 1);
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, n);
}

module.exports = solution;

