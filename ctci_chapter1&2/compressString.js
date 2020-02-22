// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
// 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
// 你可以假设字符串中只包含大小写英文字母（a至z）。

// 输入："aabcccccaaa"
// 输出："a2b1c5a3"

let s = "aabcccccaaa"
// console.log(typeof(s[0]))

var compressString = function(S) {
    if(!S){return S}
    let str = '';
    let count = 1;
    for(let i=0;i<S.length;i++){    // 看后面那个字母是不是一样
        if(S[i] === S[i+1]){
            count ++
        }else{
            str += S[i] + count;
            count = 1
        }
    }
    return str.length<S.length?str:S

}

console.log(compressString(s))

