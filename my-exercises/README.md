# Are string's charactes uniques

## Problem description

Check if the provided string's characters are uniques or not.

## Intuition

To determine if all characters in the string are unique, we need to iterate over each character and compare it with the rest. One straightforward way is to use a nested loop to compare every character with every other character.

## Solution 1 Approach (double loop)

1. Convert the string into an array of characters.

2. Use a nested loop to compare each character with every other character.

3. If any two characters match, return `false`.

4. If the loop completes without finding duplicates, return `true`.

## Complexity Analysis of Solution 1 (double loop)

- Time Complexity: `O(n^2)`, where `n` is the length of the input string. We iterate through each character once.
- Space Complexity: `O(1)`, since only one variable is used.

## Code Implementation of Solution 1 (double loop)

```javascript
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
```
