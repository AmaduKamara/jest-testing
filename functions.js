// Task 1 - SStringLength
const stringLength = (str) => {
  const stringLength = str.length;
  try {
    if (stringLength < 1) {
      throw new Error("String length must be between 1 or greater");
    }
    if (stringLength > 10) {
      throw new Error(
        "String length must be between 10 or less than 10 caracters"
      );
    }
  } finally {
  }
  return stringLength;
};

// Task 2 - ReverseString
const reverseString = (str) => str.split("").reverse().join("");

// Task 3 - Calculator class
class Calculator {
  add = (num1, num2) => num1 + num2;

  multiply = (num1, num2) => num1 * num2;

  subtract = (num1, num2) => num1 - num2;

  divide = (num1, num2) => num1 / num2;
}

const calculator = new Calculator();

// Capitalize String
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = { stringLength, reverseString, calculator, capitalize };
