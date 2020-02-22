// 给定一幅由N × N矩阵表示的图像，其中每个像素的大小为4字节，编写一种方法，将图像旋转90度。

// 不占用额外内存空间能否做到？

// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

let matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
// console.log(matrix[1][2])  // 6
// console.log(matrix[2][0])  // 7
// console.log(matrix.length)   // 3
 
var rotate = function(matrix) {    // 先对角线翻转 再水平翻转
    let len = matrix.length

    for(let i=0;i<len;i++){ // 0,1,2
        for(let j=i;j<len;j++){
           [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    console.log(matrix)
    // [ [ 1, 4, 7 ], 
     //  [ 2, 5, 8 ], 
     //  [ 3, 6, 9 ] ]

    //[   [7,4,1],
     //   [8,5,2],
     //   [9,6,3] ]

    for(let i=0;i<len;i++){
        for(let j=0;j<Math.floor(len/2);j++){
            [matrix[i][j],matrix[i][len-1-j]] = [matrix[i][len-1-j],matrix[i][j]]
        }
    }
    console.log(matrix)
};

rotate(matrix)