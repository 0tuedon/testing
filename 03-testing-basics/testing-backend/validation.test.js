import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("Should be undefined for a string", () => {
    const testString = "I am gonna leave here";

    const result = validateStringNotEmpty(testString);

    expect(result).toBeUndefined();
  });

  it("Should throw an error for a empty string", () => {
    const testString = "";

    const resultFn = () => {
      validateStringNotEmpty(testString);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });
});

describe("validateNumber()", () => {
  it("Should throw an error for a empty string", () => {
    const testString = "";

    const resultFn = () => {
      validateNumber(testString);
    };

    expect(resultFn).toThrow(/Invalid number /);
  });

  it("Should throw an error for a empty string", () => {
    const testNum = 10;

    const result = validateNumber(testNum);

    expect(result).toBeUndefined();
  });
});
