function isUnique(str) {
  const inputArr = str.split("");
  for (let i = 0; i <= inputArr.length; i++) {
    for (let j = i + 1; j <= inputArr.length; j++) {
      if (inputArr[i] === inputArr[j]) {
        return false;
      }
    }
  }
  return true;
}

function isUnique2(str) {
  const inputArr = str.split("");
  let obj = {};
  for (let i = 0; i <= inputArr.length; i++) {
    if (Object.hasOwn(obj, inputArr[i])) {
      return false;
    }
    obj[inputArr[i]] = true;
  }
  return true;
}

function isUnique3(str) {
  const inputArr = str.split("");
  let arr = [];
  for (let i = 0; i <= inputArr.length; i++) {
    if (arr.includes(inputArr[i])) {
      return false;
    }
    arr.push(inputArr[i]);
  }
  return true;
}
