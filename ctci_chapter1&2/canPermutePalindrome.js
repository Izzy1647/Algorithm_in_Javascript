// 输入："tactcoa"
// 输出：true（排列有"tacocat"、"atcocta"，等等）

let s = "tactcoa"
var canPermutePalindrome = function(s) {
    let hash = {}
    for(let i of s){    // 建哈希表统计字符个数
        if(hash[i]){
            hash[i]++
        }else{
            hash[i]=1
        }
    }
    // console.log(hash)

    let oddNum = 0     // 出现奇数次的字符大于等于2个 false
    for(let i in hash){
        if(hash[i] % 2 !== 0){oddNum++}
        if(oddNum > 1){return false}
    }
    return true
}


console.log(canPermutePalindrome(s))