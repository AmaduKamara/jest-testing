const {
  stringLength,
  reverseString,
  calculator,
  capitalize,
} = require("./functions.js");

// String Length Tests
test("String length:", () => {
  expect(stringLength("Amkam")).toBe(5);
});

// test("String length less than 1", () => {
//   expect(() => stringLength("")).toThrowError(
//     "Failed: String length must not be less than 1 caracter"
//   );
// });

// test("String length more than 10", () => {
//   expect(() => stringLength("the raining day of dawn")).toThrowError(
//     "Failed: String length must not be more than 10 caracters"
//   );
// });

// Reverse String Test
test("Reversed string:", () => {
  expect(reverseString("Amkam")).toBe("makmA");
});

// Claculator functions tests
describe("Calculator functions:", () => {
  // Addition tests
  test("Add numbers:", () => {
    expect(calculator.add(2, 4)).toBe(6);
    expect(calculator.add(5, 4)).toBe(9);
    expect(calculator.add(5, 10)).toBe(15);
  });

  // Multiplication tests
  test("Multiply numbers:", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.multiply(5, 2)).toBe(10);
    expect(calculator.multiply(5, 10)).toBe(50);
  });

  // Subtraction tests
  test("Subtract numbers:", () => {
    expect(calculator.subtract(2, 4)).toBe(-2);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(20, 10)).toBe(10);
  });

  // Division tests
  test("Divide numbers:", () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(16, 8)).toBe(2);
  });
});

// Capitalize String Test
test("First character capitalized: ", () => {
  expect(capitalize("amkam")).toBe("Amkam");
});
