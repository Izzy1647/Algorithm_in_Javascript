/**
 * @param {string} s
 * @return {boolean}
 */

// 输入: "([)]"
// 输出: false

let s = "("
var isValid = function(s) {
    let stack = []
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    
    for(let i of s){
        console.log(i)
        if(map[i]){  // 说明i是左边一半
            stack.push(i)
        }else{
            let pop = stack.pop()
            if(map[pop] !== i){
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid(s))