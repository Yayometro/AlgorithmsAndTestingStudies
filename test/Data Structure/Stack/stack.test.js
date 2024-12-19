import { describe, it, expect } from "vitest";

console.log(isBalanced("()")); // true
console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("(]")); // false
console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[]}")); // true

// First I need to create my function with only one argument
// Create an empty array first.
// Then I havo to take the first index of my string and push it into some array.
// If there's nothing on mi array the first element can be added. --> that's who we know this is the first element
// So if theres nothing to compare, the element wont compare with nothing since theres no reference


// Polish

import { describe, it, expect } from "vitest";
import evaluatePolishNotation from "../src/polishNotation";

describe("Polish Notation Evaluator", () => {
  it("should evaluate simple addition", () => {
    expect(evaluatePolishNotation("+ 3 4")).toBe(7);
  });

  it("should evaluate simple subtraction", () => {
    expect(evaluatePolishNotation("- 7 3")).toBe(4);
  });

  it("should evaluate simple multiplication", () => {
    expect(evaluatePolishNotation("* 5 6")).toBe(30);
  });

  it("should evaluate simple division", () => {
    expect(evaluatePolishNotation("/ 12 3")).toBe(4);
  });

  it("should evaluate complex expressions", () => {
    expect(evaluatePolishNotation("+ * 2 3 4")).toBe(10);
    expect(evaluatePolishNotation("- / 10 2 3")).toBe(2);
  });

  it("should handle negative numbers", () => {
    expect(evaluatePolishNotation("+ -3 5")).toBe(2);
  });

  it("should handle decimal numbers", () => {
    expect(evaluatePolishNotation("* 2.5 4")).toBe(10);
  });

  it("should throw an error for unknown operators", () => {
    expect(() => evaluatePolishNotation("% 10 3")).toThrow(
      "Unknown operator: %"
    );
  });

  it("should handle expressions with multiple operators", () => {
    function evaluatePolishNotation(string){

    }
    // Numbers have to compare if theres an num as last element in the arr do operation if not just push it.
    expect(evaluatePolishNotation("+ * 2 3 - 8 4")).toBe(10);
  });

  it("should handle expressions with more than two operands", () => {
    expect(evaluatePolishNotation("+ 1 2 3 4")).toBe(10);
  });
});