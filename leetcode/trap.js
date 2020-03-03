/**
* @param {number[]} height
* @return {number}
*/

// 接雨水

let height = [0,1,0,2,1,0,1,3,2,1,2,1]

var trap = function(height) {
    let len = height.length
    let sum = new Array(len)   // 存放每列水量

    // 动态规划
    // 全部初始化为0 一定要初始化 不然下面生成数组时全是NaN
    let leftHighest = new Array(len).fill(0)   // 存放第i个墙左边最高的高度 不含i  
    let rightHighest = new Array(len).fill(0)  // 存放第i个墙右边最高的高度 不含i

    for(let i=1;i<len-1;i++){   // 得到leftHighest数组
        leftHighest[i] = Math.max(leftHighest[i-1],height[i-1])       
    }
    for(let i=len-2;i>-1;i--){
        rightHighest[i] = Math.max(rightHighest[i+1],height[i+1])
    }

    for(let i=0;i<len;i++){
        let setHeight = leftHighest[i]<[rightHighest[i]]?leftHighest[i]:rightHighest[i]
        sum[i] = setHeight>height[i]?setHeight-height[i]:0
    }
    
    let res = 0
    for(let i in sum){
        res += sum[i]
    }
    return res

    // 暴力解法
    // for(let i=0;i<len;i++){
    //     let lheight = 0
    //     let rheight = 0
    //     for(let left=0;left<i;left++){   // 找左边最高的
    //         if(height[left]>lheight){
    //             lheight = height[left]
    //         }
    //     }
    //     for(let right=i;right<len;right++){  // 找右边最高的
    //         if(height[right]>rheight){
    //             rheight = height[right]
    //         }
    //     }
    //     let setHeight = rheight<lheight?rheight:lheight  // 找左右更低的
    //     sum[i] = setHeight>height[i]?setHeight-height[i]:0  // 这一列水量
    // }

    // let res = 0    //计算总和
    // for(let i in sum){
    //     res+=sum[i]
    // }

    // return res


    

};

console.log(trap(height))
