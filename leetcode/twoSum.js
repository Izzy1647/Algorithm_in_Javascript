/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 给定 nums = [2, 7, 11, 15], target = 9
let nums = [2,1,3,15]
var twoSum = function(nums, target) {
    let temp = [];
    for(let i=0;i<nums.length;i++){
        let dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }

   
};

console.log(twoSum(nums,4))