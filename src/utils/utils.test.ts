import { reverseString, countUniqLetters, rle } from "./utils";

describe("utils.ts", () => {
  it("reverseString should works correctly", () => {
    const params = [
      ["ABCD", "DCBA"],
      ["abcd", "dcba"],
    ];

    params.forEach(([input, output]) => {
      expect(reverseString(input)).toBe(output);
    });
  });

  it("countUniqLetters should works correctly", () => {
    const params = [
      ["aaabbbcccaaa", "a6b3c3"],
      ["bbbbaaacccb", "a3b5c3"],
      ["xxxaaabbbpppaaa", 'a6b3p3x3']
    ];

    params.forEach(([input, output]) => {
      expect(countUniqLetters(input)).toBe(output);
    });
  });
  it("rle should works correctly", () => {
    const params = [
      ["aaabbbcccxdddaaacccddd", "a3b3c3xd3a3c3d3"],
      ["bbbbaaacccb", "b4a3c3b"],
      ["xxxaaabbbpppaaa", 'x3a3b3p3a3'],
      ["abcd", 'abcd']
    ];

    params.forEach(([input, output]) => {
      expect(rle(input)).toBe(output);
    });
  });
});