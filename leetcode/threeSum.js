/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
let nums = [-1, 0, 1, 2, -1, -4]

// 三个指针滑动 初始位置分别在 i, i+1, len-1
var threeSum = function(nums) {
    let res = []

    nums.sort((a,b)=>{   // 从小到大排序
        return a-b
    })

    for(let i=0;i<nums.length;i++){

        if(i>0 && nums[i] === nums[i-1]){  // 重复跳过
            continue
        }

        let j = i+1
        let k = nums.length-1

        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]
            if( sum === 0){   // 满足条件
                res.push([nums[i],nums[j],nums[k]])
                j++ 
                while(nums[j] === nums[j-1] && j<k){j++}
                k--
                while(nums[k] === nums[k+1] && j<k){k--}
            }else if(sum < 0){   // 加起来小 j往右滑动
                j++
            }else{   // 加起来大 k往左滑动
                k--
            }
        }
    }
    return res


};

console.log(threeSum(nums))
