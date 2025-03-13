var rotate = function (nums, k) {
  const index = nums.length - (k % nums.length);
  const removedElem = nums.splice(index, k % nums.length);
  nums.splice(0, 0, ...removedElem);
};
