/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countPairs(nums, target) {
    nums.sort((a, b) => a - b); 
    let count = 0;
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] < target) {
                count += mid - left + 1; 
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return count;
}