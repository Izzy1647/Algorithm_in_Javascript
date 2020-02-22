// 01.02. 判定是否互为字符重排

// arr.indexof
// arr.splice

let s1 = "abcaaa", s2 = "bcaaaa"
var CheckPermutation = function(s1, s2) {

    if(s1.length !== s2.length){
        return false
    }

    let s1arr = s1.split('')
    for(let i in s2){
        if(s1arr.indexOf(s2[i]) === -1){    // s1里没有s2的字母
            return false
        }else{          //这个字母在s1arr 数组里
            s1arr.splice(s1arr.indexOf(s2[i]), 1)    // 把数组里这个字母给去掉
        }
    }
    return true


    // 转成数组后排序后再转成字符串比较
    return s1.split('').sort().toString() == s2.split('').sort().toString()



}

console.log(CheckPermutation(s1,s2))

