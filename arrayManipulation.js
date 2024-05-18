// Task 1
function processArray(numbers) {
    return numbers.map((number) => {
      if (number % 2 === 0) {
        return number * number;
      } else {
        return number * 3;
      }
    });
  }
  //Task 2
  function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
      if (numArr[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  