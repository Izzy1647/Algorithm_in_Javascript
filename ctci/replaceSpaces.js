// URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。

// 输入："Mr John Smith    ", 13
// 输出："Mr%20John%20Smith"

let str = '123 134'

var replaceSpaces = function(S, length) {
    S = S.substring(0,length)   //去掉空格尾

    let res = ''
    for(let i of S){
        if(i !== ' '){
            res += i
        }else{
            res += '%20'
        }
    }
    return res
    
    // return S.substr(0,length).replace(/ /g,"%20")

}

console.log(replaceSpaces("Mr John Smith    ",13))