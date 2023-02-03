import { describe, expect, test } from "@jest/globals";
import { validateEmail } from ".";

describe("test validateEmail", () => {
  test("should validate email", () => {
    expect(validateEmail("test@domain.com")).toBe(true);
  });

  test("should not validate email", () => {
    expect(validateEmail("test@domain")).toBe(false);
  });
});
