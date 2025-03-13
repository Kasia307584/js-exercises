# 189. Rotate Array

## Problem description

Given an integer array, rotate the array to the right by a number of steps steps.
[LeetCode Problem: Rotate Array](https://leetcode.com/problems/rotate-array/description/)

## Intuition

To rotate the array, we need to find a way to shift a portion of the array from the end to the beginning. A straightforward approach would be to iterate through the array and move elements one by one. However, a more efficient method is to take a section from the end of the array and place it at the beginning in a single operation.

An important edge case to consider is when the number of rotation steps exceeds the length of the array. In such cases, we can take the remainder of the division of steps by the array length to determine the effective number of shifts needed.

## Solution Approach

### 1. Initial Attempt (without handling edge case)

- Directly calculate the index where the split occurs with `nums.length - k`;
- Extract the last k elements using `splice(index, k)`.
- Insert these elements at the beginning using `splice(0, 0, ...removedElem)`.
  Issue: This approach can fail when `k > nums.length`, leading to incorrect results due to negative indices.

### 2. Refinement (handling edge case with modulo)

- Use `k % nums.length` to avoid potential errors from negative indices and ensure that only the necessary rotations are executed.
- Recalculate the split index with `nums.length - (k % nums.length)`.
- Extract and move the last `k % nums.length` elements using `splice`.

## Complexity Analysis

- Time Complexity: `O(k)`, since the splice operations shift elements in the array, each taking up to `O(k)`.
- Space Complexity: `O(k)`, since an extra array (`removedElem`) temporarily stores up to k elements.

## Code Implementation

```javascript
var rotate = function (nums, k) {
  const index = nums.length - (k % nums.length);
  const removedElem = nums.splice(index, k % nums.length);
  nums.splice(0, 0, ...removedElem);
};

// Examples
const test = [1, 2, 3, 4, 5, 6, 7];
rotate(test, 3);
console.log(test); // Output: [5, 6, 7, 1, 2, 3, 4]
rotate(test, 8);
console.log(test); // Output: [7, 1, 2, 3, 4, 5, 6]
```
