var romanToInt = function (s) {
  const inputCoverted = s.split("");
  let sum = 0;
  inputCoverted.forEach((elem, index) => {
    switch (elem) {
      case "M":
        sum += 1000;
        break;
      case "D":
        sum += 500;
        break;
      case "L":
        sum += 50;
        break;
      case "V":
        sum += 5;
        break;
      case "C":
        if (
          inputCoverted[index + 1] === "D" ||
          inputCoverted[index + 1] === "M"
        ) {
          sum -= 100;
        } else {
          sum += 100;
        }
        break;
      case "X":
        if (
          inputCoverted[index + 1] === "L" ||
          inputCoverted[index + 1] === "C"
        ) {
          sum -= 10;
        } else {
          sum += 10;
        }
        break;
      case "I":
        if (
          inputCoverted[index + 1] === "V" ||
          inputCoverted[index + 1] === "X"
        ) {
          sum -= 1;
        } else {
          sum += 1;
        }
        break;
    }
  });
  return sum;
};
