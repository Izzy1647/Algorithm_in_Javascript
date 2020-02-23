/**
 * @param {number[]} height
 * @return {number}
 */

// leetcode 11 最多水容器

let height = [1,8,6,2,5,4,8,3,7]

// 直接暴力 O(n2)

// 双指针 正确性证明

var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let res = 0
    while(left < right){
        let curr = Math.min(height[left],height[right]) * (right - left)
        res = res>curr?res:curr
        
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
        // height[left]<height[right]?left++:right--
    }

    return res



};