// 1.1 判断一个字符串中的字符是否唯一

// arr.includes()
// 哈希表 

let s = "qwerssssjk"
// console.log(s.length)

var isUnique = function(astr) {
    for(let i = 0;i<astr.length;i++){
        if(astr.includes(astr[i],i+1)){    // arr.includes(searchElement,fromIndex)
            return false
        }
    }
    return true

    // 哈希表解法
    if(astr.length === 0){
        return true
    }
    let hash = {}
    for(let i of astr){
        if(hash[i]){
            return false
        }else{
            hash[i] = true
        }
    }
    return true

}


console.log(isUnique(s))


