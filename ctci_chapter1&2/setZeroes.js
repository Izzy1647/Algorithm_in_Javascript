// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

// 输入：
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出：
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
let matrix = [
      [0,1,2,0],
      [3,4,5,2],
      [1,3,1,5]
    ]

var setZeroes = function(matrix) {
    let xarr = []
    let yarr = []
    let x = matrix.length   // 3
    let y = matrix[0].length   // 4

    for(let i=0;i<x;i++){     // 把有0的xy坐标存入xarr yarr
        for(let j=0;j<y;j++){
            if(matrix[i][j] === 0){
                xarr.push(i)
                yarr.push(j)
            }
        }
    }
    // console.log(xarr,yarr)

    for(let i=0;i<x;i++){     
        for(let j=0;j<y;j++){
            if(xarr.indexOf(i)!==-1 || yarr.indexOf(j)!==-1){
                matrix[i][j] = 0
            }
        }
    }

    // console.log(matrix)
};

setZeroes(matrix)