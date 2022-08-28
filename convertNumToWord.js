const placesOfZeros = ["hundred", "thousand", "million", "billion", "trillion"];
const numbersInWord = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const twoDigitNumBtwTenToTwentyInWords = [
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const twoDigitNumWithZeros = [
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const countDigit = (num) => {
  let count = 0;
  while (num !== 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};

const divideNumIntoSetOfThree = (num) => {
  const arrOfThreeDigitNum = [];
  let groupOfThreeZeros = -1;
  const digitCount = countDigit(num);
  while (num !== 0) {
    if (digitCount >= 3) {
      let newNum = num % 1000;
      arrOfThreeDigitNum.unshift(newNum);
      groupOfThreeZeros++;
      num = Math.floor(num / 1000);
    } else if (digitCount < 3 && digitCount > 1) {
      let newNum = num % 100;
      arrOfThreeDigitNum.unshift(newNum);
      num = Math.floor(num / 100);
    } else if (digitCount === 1) {
      let newNum = num % 10;
      arrOfThreeDigitNum.unshift(newNum);
      num = Math.floor(num / 10);
    }
  }
  return {
    arrOfThreeDigitNum,
    groupOfThreeZeros,
    digitCount,
  };
};

const countOfZerosAtLast = (num) => {
  let countZeros = 0;
  while (num !== 0) {
    let newZero = num % 10;
    if (newZero === 0) {
      countZeros++;
    } else {
      break;
    }
    num = Math.floor(num / 10);
  }
  return countZeros;
};

const convertOneDigitNumIntoWord = (num) => numbersInWord[num];

const convertTwoDigitNumIntoWord = (num) => {
  if (countOfZerosAtLast(num) === 1) {
    while (num !== 0) {
      num = Math.floor(num / 10);
      if (num === 1) return twoDigitNumWithZeros[0];
      return twoDigitNumWithZeros[num - 1];
    }
  } else if (num > 10 && num < 20)
    return twoDigitNumBtwTenToTwentyInWords[num - 11];
  else if (num > 20 && num < 100) {
    let word = "";
    const strArr = num.toString().split("");
    strArr.forEach((el) => {
      if (word === "") {
        word = word + twoDigitNumWithZeros[el - 1];
      } else {
        word = word + numbersInWord[el];
      }
    });
    return word;
  }
};

const convertThreeDigitNumToWord = (num) => {
  if (countOfZerosAtLast(num) === 2)
    return numbersInWord[Math.floor(num / 100)] + " " + placesOfZeros[0];
  else if (countOfZerosAtLast(num) === 1)
    return (
      numbersInWord[Math.floor(num / 100)] +
      " " +
      placesOfZeros[0] +
      " " +
      twoDigitNumWithZeros[num.toString().split("")[1] - 1]
    );
  else if (
    num > Math.floor(num / 100) * 100 + 10 &&
    num < Math.floor(num / 100) * 100 + 20
  )
    return (
      numbersInWord[Math.floor(num / 100)] +
      " " +
      placesOfZeros[0] +
      " " +
      twoDigitNumBtwTenToTwentyInWords[(num % 100) - 11]
    );
  else if (num > Math.floor(num / 100) * 100 + 20)
    return (
      numbersInWord[Math.floor(num / 100)] +
      " " +
      placesOfZeros[0] +
      " " +
      twoDigitNumWithZeros[num.toString().split("")[1] - 1] +
      " " +
      numbersInWord[num % 10]
    );
  else if (
    num > Math.floor(num / 100) * 100 &&
    num < Math.floor(num / 100) * 100 + 10
  )
    return (
      numbersInWord[Math.floor(num / 100)] +
      " " +
      placesOfZeros[0] +
      " " +
      numbersInWord[Math.floor(num % 10)]
    );
  return;
};

const numberToWords = (num) => {
  let { arrOfThreeDigitNum, groupOfThreeZeros, digitCount } =
    divideNumIntoSetOfThree(num);
  let word = "";
  arrOfThreeDigitNum.forEach((el, i, arrOfThreeDigitNum) => {
    if (countDigit(el) === 1) {
      word =
        word +
        " " +
        convertOneDigitNumIntoWord(el) +
        " " +
        `${
          i < arrOfThreeDigitNum.length - 1
            ? placesOfZeros[groupOfThreeZeros]
            : ""
        }`;
    } else if (countDigit(el) === 2) {
      word =
        word +
        " " +
        convertTwoDigitNumIntoWord(el) +
        " " +
        `${
          i < arrOfThreeDigitNum.length - 1
            ? placesOfZeros[groupOfThreeZeros]
            : ""
        }`;
    } else if (countDigit(el) === 3) {
      word =
        word +
        " " +
        convertThreeDigitNumToWord(el) +
        " " +
        `${
          i < arrOfThreeDigitNum.length - 1
            ? placesOfZeros[groupOfThreeZeros]
            : ""
        }`;
    }
    groupOfThreeZeros--;
  });
  return word;
};

let inputNumber = process.argv[2];

console.log(divideNumIntoSetOfThree(inputNumber));
console.log(numberToWords(inputNumber));
