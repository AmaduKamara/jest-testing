const stringLength = require("./string-length.js");
// String Length test using
test("Should return a string length of number type", () => {
  expect(stringLength("Amkam")).toBe(5);
});
