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

module.exports = { stringLength, reverseString };
