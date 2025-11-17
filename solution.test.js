const solution = require("./solution.js");


test("throw error if parameters are false", () => {
    expect(() => solution(null, 3)).toThrow();
    expect(() => solution("abc", null)).toThrow();
    expect(() => solution(123, 3)).toThrow();
    expect(() => solution("abc", "3")).toThrow();
});


test("return empty array if string is empty", () => {
    expect(solution("", 5)).toEqual([]);
    expect(solution("   ", 2)).toEqual([]);
});



test("correct order", () => {
    const result = solution("bar baz foo foo zblah zblah zblah baz toto bar", 3);

    expect(result).toEqual([
        ["zblah", 3],
        ["bar", 2],
        ["baz", 2],
    ]);
});


test("correct order: alphabetical tie", () => {
    const result = solution("c a b", 3);

    expect(result).toEqual([
        ["a", 1],
        ["b", 1],
        ["c", 1],
    ]);
});
