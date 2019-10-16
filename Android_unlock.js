
// 安卓手机一共有多少种解锁图案

function p(a,b) {
    let res = 1;
    for(let i=0;i<b;i++){
        res = res*a;
        a--;
    }
    return res;
}


// https://blog.csdn.net/KNIGH_YUN/article/details/90116068
function permutation(a, m) {
    let result = [];
    let n = a.length;
    m = m || n;

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

function merge(arr) {  // 合并到一个数组
    return arr.map(x => x.join(''));
}

function isContained(str, substr) {  // 定义判断是否为子字符串的函数
    return new RegExp(substr).test(str);
}



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


console.log("length of array:",four2nine.length);
// console.log(four2nine[132]);

function isImpossible(a,b,c,wholeStr) {  // a=1 b=3 c=2
    let charA = a.toString();
    let charB = b.toString();
    let charC = c.toString();
    let illegalStr = charA+charB;  //'13'

    if(isContained(wholeStr,illegalStr)){  //'13' contained
        // console.log(wholeStr.substring(0,wholeStr.indexOf(charC)))
        // console.log(isContained(wholeStr.substring(0,wholeStr.indexOf(charC)),charC))
        if(!isContained(wholeStr.substring(0,wholeStr.indexOf(charA)),charC)){  //2 not used before

            return true
        }
    }
    return false
}

console.log(isImpossible(1,3,2,'123456'));

let illegalList = []


for(item of four2nine){
    let itemStr = item.toString()  // '1234'
    if((isImpossible(1,3,2,itemStr)) || (isImpossible(3,1,2,itemStr)) || (isImpossible(4,6,5,itemStr))
        || (isImpossible(6,4,5,itemStr)) || (isImpossible(7,9,8,itemStr)) || (isImpossible(9,7,8,itemStr))
        || (isImpossible(1,7,4,itemStr)) || (isImpossible(7,1,4,itemStr)) || (isImpossible(2,8,5,itemStr))
        || (isImpossible(8,2,5,itemStr)) || (isImpossible(3,9,6,itemStr)) || (isImpossible(9,3,6,itemStr))
        || (isImpossible(9,1,5,itemStr)) || (isImpossible(1,9,5,itemStr)) || (isImpossible(3,7,5,itemStr))
        || (isImpossible(7,3,5,itemStr)))
    {
        illegalList.push(item)
        allSum--;
    }
}
// console.log("illegalList:",illegalList)
console.log("finalsum:",allSum);


