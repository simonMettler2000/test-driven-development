import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
  test("Valid ISBN-13", () => {
    expect(isValid("9780306406157")).toBe(true);
    expect(isValid("9781861972712")).toBe(true);
  });

  test("Invalid ISBN-13 (wrong check digit)", () => {
    expect(isValid("9780306406158")).toBe(false);
  });

  test("Invalid ISBN-13 (wrong length)", () => {
    expect(isValid("978030640615")).toBe(false);
    expect(isValid("97803064061571")).toBe(false);
  });

  test("Invalid ISBN-13 (non-numeric characters)", () => {
    expect(isValid("97803X6406157")).toBe(false);
  });
});
