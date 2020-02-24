/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

let intervals = [[1,3],[2,6],[8,19],[15,18]]
var merge = function(intervals) {
    if(!intervals || !intervals.length){return []}
    
    intervals.sort((a,b)=>a[0]-b[0])
    console.log("intrervals:",intervals)

    let res = [intervals[0]]
    let positionInRes = 0

    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0] <= res[positionInRes][1]){
            res[positionInRes][1] = Math.max(res[positionInRes][1],intervals[i][1])
        }else{
            res.push(intervals[i])
            positionInRes++
        }
    }
    // console.log("res:",res)

    return res

};

merge(intervals)