
// 安卓手机一共有多少种解锁图案

function p(a,b) {   //求p(a,b)的值 a>b
    let res = 1;
    for(let i=0;i<b;i++){
        res = res*a;
        a--;
    }
    return res;
}

function permutation(a, m) {   //在数组a中取出m个数的全排列
    let result = [];
    let n = a.length;
    m = m || n;

    // https://blog.csdn.net/KNIGH_YUN/article/details/90116068
    function recur(_a, tmpResult = []) {
        if (tmpResult.length === m) {
            result.push(tmpResult);
        } else {
            for (let i = 0; i < _a.length; i++) {
                let tmpA = _a.concat();
                let _tmpResult = tmpResult.concat();
                _tmpResult.push(tmpA[i]);
                tmpA.splice(i, 1);
                recur(tmpA, _tmpResult);
            }
        }
    }
    recur(a);
    return result;
}

function merge(arr) {  // 合并permutation()中全排列到一个数组
    return arr.map(x => x.join(''));
}



function isContained(str, substr) {  // 判断substr是否为str的子字符串
    return new RegExp(substr).test(str);
}

function isImpossible(a,b,c,wholeStr) {  // 判断wholeStr是否为不可能的序列：经过ab却没有经过c 例如经过13没有经过2
    let charA = a.toString();
    let charB = b.toString();
    let charC = c.toString();
    let illegalStr = charA+charB;

    if(isContained(wholeStr,illegalStr)){
        if(!isContained(wholeStr.substring(0,wholeStr.indexOf(charA)),charC)){   //比如：存在"13"并且"2"之前没用过 就判定为不可能
            return true
        }
    }
    return false
}

console.log(isImpossible(1,3,2,'13456'));  //true

// 计算总排列数
let allSum = 0;
for(let i=4;i<10;i++){
    allSum += p(9,i)
}

console.log("allsum:",allSum); // 985824


let arr = [1,2,3,4,5,6,7,8,9];
let four2nine = [];  // 所有可能排列方式的数组
for (let i =4;i<10;i++){
    for(let j of merge(permutation(arr,i))){
        four2nine.push(j)
    }
}

console.log("length of array:",four2nine.length);  // ==allSum


for(item of four2nine){
    let itemStr = item.toString()  // '1234'
    if((isImpossible(1,3,2,itemStr)) || (isImpossible(3,1,2,itemStr)) || (isImpossible(4,6,5,itemStr))
        || (isImpossible(6,4,5,itemStr)) || (isImpossible(7,9,8,itemStr)) || (isImpossible(9,7,8,itemStr))
        || (isImpossible(1,7,4,itemStr)) || (isImpossible(7,1,4,itemStr)) || (isImpossible(2,8,5,itemStr))
        || (isImpossible(8,2,5,itemStr)) || (isImpossible(3,9,6,itemStr)) || (isImpossible(9,3,6,itemStr))
        || (isImpossible(9,1,5,itemStr)) || (isImpossible(1,9,5,itemStr)) || (isImpossible(3,7,5,itemStr))
        || (isImpossible(7,3,5,itemStr)))
    {
        allSum--;
    }
}
// console.log("illegalList:",illegalList)


console.log("finalResult:",allSum);  //389112
