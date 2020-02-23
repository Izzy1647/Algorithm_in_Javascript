/**
 * @param {string} s
 * @return {number}
 */

// 最长无重复字串

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

//滑动窗口
let s = "abcabcbb"
var lengthOfLongestSubstring = function(s) { 
    let res = 0
    let i = 0
    let temp = []
    while(i<s.length){
        if(temp.indexOf(s[i]) === -1){
            temp.push(s[i])
        }else{
            temp.shift()
            continue     // 跳过下面直接进行while的下一个
        }
        res = res>temp.length?res:temp.length
        i++
    }
    return res
}


console.log(lengthOfLongestSubstring(s))
