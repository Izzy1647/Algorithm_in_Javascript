// 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成
// （比如，waterbottle是erbottlewat旋转后的字符串）。

let s1 = "waterbottle", s2 = "erbottlewat"
var isFlipedString = function(s1, s2) {
    if(s1.length !== s2.length){
        return false
    }else{
        return (s1+s1).includes(s2)
    }
};

console.log(isFlipedString(s1,s2))