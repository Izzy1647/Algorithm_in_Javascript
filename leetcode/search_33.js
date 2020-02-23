/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
let nums = [4,5,6,7,0,1,2]
let target = 0

var search = function(nums, target) {
    // return nums.indexOf(target)  不可取
    let l = 0
    let r = nums.length - 1
    while(l<=r){
        let mid = Math.floor(l+(r-l)/2)
        if(nums[mid] === target){return mid}
        if(nums[mid] > nums[r]){  // 左边按升序排列
            if(target>=nums[l] && target<nums[mid]){
                r = mid-1
            }else{
                l = mid+1
            }
        }else{   // 右边升序排列
            if(target>nums[mid] && target<=nums[r]){
                l = mid+1
            }else{
                r = mid-1
            }
        }
    }
    return -1
};