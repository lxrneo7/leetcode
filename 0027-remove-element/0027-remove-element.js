/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     let i = 0;
      while (i < nums.length) {
        if (nums.includes(val)) {
          nums.splice(nums.indexOf(val), 1);
        } else {
          i++;
        }
      }

      return nums.length;
};