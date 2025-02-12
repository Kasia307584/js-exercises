# 13. Roman to Integer

## Problem description

Convert a given Roman numeral string into an integer.
[LeetCode Problem: Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

## Intuition

To convert a Roman numeral string into an integer, we are iterating through each character from left to right. When a smaller numeral appears before one of the two closes larger ones (`I` before `V` or `X`, `X` before `L` or `C` and `C` before `D`, or `M`), it should be subtracted instead of added. It's probably easier to substract a given value when necessary rather than trying to comibne two Roman numerals into one number.

## Solution Approach

1. Convert the input string into an array – this allows us to iterate through each character easily.
2. Use a `switch` statement to determine the integer value of each Roman numeral.
3. Check for subtraction cases:
   - If `C` appears before `D` or `M`, subtract 100 instead of adding.
   - If `X` appears before `L` or `C`, subtract 10 instead of adding.
   - If `I` appears before `V` or `X`, subtract 1 instead of adding.
4. Accumulate the result in a `sum` variable.
5. Return the final sum after iterating through the string.

## Complexity Analysis

- Time Complexity: `O(n)`, where `n` is the length of the input string. We iterate through each character once.
- Space Complexity: `O(1)`, since only a few variables are used.

## Code Implementation

```javascript
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

// Examples
console.log(romanToInt("XII")); // Output: 12
console.log(romanToInt("MCMXCIV")); // Output: 1994
```
