//动态规划 -- 最长公共子序列

function longestSeq(input1,input2,n1,n2){
    var T = []; // T[i][j]表示 公共子序列长度
    for(let i=0;i<n1;i++){
        T[i] = [];
        for(let j= 0;j<n2;j++){
            if(j===0 ||i===0){
                T[i][j] = 0;
                continue;
            }
            if(input1[i] === input2[j]){
                T[i][j] = T[i-1][j-1] + 1;
            }else{
                T[i][j] = Math.max(T[i-1][j],T[i][j-1])
            }

        }

    }

    findValue(input1,input2,n1,n2,T);

    return T;

}

//!!!如果它来自左上角加一，则是子序列，否则向左或上回退。
//findValue过程，其实就是和 就是把T[i][j]的计算反过来。
function findValue(input1,input2,n1,n2,T){
    var i = n1-1,j=n2-1;
    var result = [];//结果保存在数组中
    console.log(i);
    console.log(j);
    while(i>0 && j>0){
        if(input1[i] === input2[j]){
            result.unshift(input1[i]);
            i--;
            j--;
        }else{
            //向左或向上回退
            if(T[i-1][j]>T[i][j-1]){
                //向上回退
                i--;
            }else{
                //向左回退
                j--;
            }
        }

    }

    console.log(result);
}


//两个序列，长度不一定相等, 从计算表格考虑，把input1和input2首位都补一个用于占位的空字符串
var input2 = ["","a","b","c","a","d","f"],
    input1 = ["","a","c","b","a","d"],
    n1 = input1.length,
    n2 = input2.length;

console.log(longestSeq(input1,input2,n1,n2));
