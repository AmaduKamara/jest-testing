const { stringLength, reverseString } = require("./functions.js");

// String Length Tests
test("String length", () => {
  expect(stringLength("Amkam")).toBe(5);
});

test("String length less than 1", () => {
  expect(() => stringLength("")).toThrowError(
    "Failed: String length must not be less than 1 caracter"
  );
});

test("String length more than 10", () => {
  expect(() => stringLength("the raining day of dawn")).toThrowError(
    "Failed: String length must not be more than 10 caracters"
  );
});

// Reverse String Test
test("reversed string:", () => {
  expect(reverseString("Amkam")).toBe("makmA");
});
