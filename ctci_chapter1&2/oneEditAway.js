// 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。
// 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

let first = "pale"
let second = "ple"

var oneEditAway = function(first, second) {
    if(first === second){  //相等true
        return true
    }

    if(first.length === second.length){  // 长度一样看字母不同个数
        let diffTimes = 0
        for(let i in first){
            if(first[i] !== second[i]){
                diffTimes++
            }
        }
        return diffTimes < 2
    }

    if(Math.abs(first.length - second.length) === 1){     // 长度差1看是不是能删掉就一样
        let longer = first.length-second.length > 0 ? first : second 
        let shorter = first.length-second.length < 0 ? first : second 
        
        //pale  ple    
        for(let i = 0;i<longer.length;i++){
            if(longer[i] != shorter[i]){
                return longer.substring(i+1) === shorter.substring(i)
            }
        }
    }

    return false
};

console.log(oneEditAway(first,second))