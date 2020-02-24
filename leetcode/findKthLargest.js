/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

let nums = [3,2,3,1,2,4,5,5,6]
var findKthLargest = function(nums, k) {
    // O(nlogn) 排序
    nums = nums.sort((a,b)=>b-a)
    return nums[k-1]
    
};
console.log(findKthLargest(nums,4))