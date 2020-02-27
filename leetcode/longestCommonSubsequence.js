/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

let text1 = "abcde", text2 = "ace" 
var longestCommonSubsequence = function(text1, text2) {
    let table = []
    for(let i=0;i<text2.length+1;i++){    // 初始化table
        let row = new Array(text1.length+1)
        table.push(row)
    }

    for(let i=0;i<table[0].length;i++){   // table的第一行
        table[0][i] = 0  
    }

    for(let i=0;i<table.length;i++){   // table的第一列
        table[i][0] = 0
    }

    for(let i=1;i<table.length;i++){    // 填表
        for(let j=1;j<table[i].length;j++){
            if(text2[i-1] === text1[j-1]){
                table[i][j] = table[i-1][j-1] + 1
            }else{
                table[i][j] = Math.max(table[i][j-1],table[i-1][j])
            }
        }
    }

    // console.log(table)

    return table[text2.length][text1.length]

};

console.log(longestCommonSubsequence(text1,text2))
