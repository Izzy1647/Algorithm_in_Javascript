// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function(nums) {
    let currMaxSum = nums[0]
    let res = nums[0]

    for(let i=1;i<nums.length;i++){
        currMaxSum = Math.max(nums[i],nums[i]+currMaxSum)
        res = Math.max(res,currMaxSum)
    }
    return res

};