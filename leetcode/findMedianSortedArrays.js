/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))

// 你可以假设 nums1 和 nums2 不会同时为空。

let nums1 = [1,2]
let nums2 = [3,4]

var findMedianSortedArrays = function(nums1, nums2) {
    // O(m+n)
    let mergedArr = []
    let i = 0
    let j = 0

    // 先合并排序 再取中位数
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
            mergedArr.push(nums1[i])
            i++
        }else{
            mergedArr.push(nums2[j])
            j++
        }
    }

    if(nums1[i]){
        mergedArr = mergedArr.concat(nums1.slice(i))
    }else if(nums2[j]){
        mergedArr = mergedArr.concat(nums2.slice(j))
    }

    let len = mergedArr.length
    return len%2===0? (mergedArr[len/2]+mergedArr[len/2-1])/2 : mergedArr[Math.floor(len/2)]
};

console.log(findMedianSortedArrays(nums1,nums2))