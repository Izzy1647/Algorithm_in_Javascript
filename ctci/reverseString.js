let s = ["h","e","l","l","o"]
console.log("s:",s)

// s.reverse()

var reverseString = function(s) {

    // let left = 0
    // let right = s.length-1
    // while(left<right){
    //     let temp = s[right]
    //     s[right] = s[left]
    //     s[left] = temp
    //     left ++
    //     right --
    // }


    // 分治思想，递归解决。
    function digui(arr,start,end){
        if(start>end){
            return 
        }
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        digui(arr,start+1,end-1)    //  写成++ -- 就不行
    }

    digui(s,0,s.length-1)

};
reverseString(s)
console.log("reversed:",s)





var CheckReverse = function(s1, s2) {
    let sa1 = s1.split('')    //  字符串转字符串数组
    let left = 0
    let right = sa1.length-1
    while(left<right){
        let temp = sa1[right]
        sa1[right] = sa1[left]
        sa1[left] = temp
        left ++
        right --
    }
    // console.log(sa1)
    s1 = sa1.join('')    // 字符串数组转回成字符串
    if(s1 === s2){
        return true
    }else{
        return false
    }
}
let s1 = "abcc", s2 = "cbac"
console.log(CheckReverse(s1,s2))