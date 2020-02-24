// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

/**
 * @param {string} s
 * @return {string}
 */

let s = 'ajsjfhfghdjsk'

var expand = function(s,l,r){    // 返回从某一点中心向外扩张的最大长度
    while(l >= 0 && r < s.length && s[l]===s[r]){
        l--
        r++
    }
    return s.substring(l+1,r)    // [l+1,r)
}

var longestPalindrome = function(s) {
    let res = ''
    for(let i=0;i<s.length;i++){
        let s1 = expand(s,i-1,i)
        let s2 = expand(s,i,i)

        res = s1.length>res.length ? s1 : res
        res = s2.length>res.length ? s2 : res
    }

    return res
};

console.log(longestPalindrome(s))
