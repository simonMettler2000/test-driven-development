import { formatDuration } from "./duration";
describe("test the formatting of the duration", () => {
  test("33 is 33s", () => {
    expect(formatDuration(33)).toBe("33s");
  });
  test("123 is 2m and 3s", () => {
    expect(formatDuration(123)).toBe("2m 3s");
  });
  test("500 is 8m and 20s", () => {
    expect(formatDuration(500)).toBe("8m 20s");
  });
  test("3600 is 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
  });
  test("3999 is 1h 6mins and 30s", () => {
    expect(formatDuration(3999)).toBe("1h 6m 39s");
  });
  test("0 is 0s", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  test("-1 is throwing an exception ERROR", () => {
    expect(() =>formatDuration(-1)).toThrow("ERROR");
  });
  test("10.5 is rounded down to 11s", () => {
    expect(formatDuration(10.5)).toBe("11s");
  });
});

describe("formatting the duration", () => {
  test.each([
    [33, "33s"],
    [123, "2m 3s"],
    [500, "8m 20s"],
    [3600, "1h"],
    [3999, "1h 6m 39s"],
    [0, "0s"],
    [10.5, "11s"],
  ])("formatDuration(%d) == %s", (seconds, expected) => {
    expect(formatDuration(seconds)).toBe(expected);
  });

  test("throws an error for negative numbers", () => {
    expect(() => formatDuration(-1)).toThrow("ERROR");
  });
});