/**
 * @param {number} stackSize
 */

 /**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */

// 三合一 描述如何只用一个数组来实现三个栈。

// 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。

// 构造函数会传入一个stackSize参数，代表每个栈的大小。

var TripleInOne = function(stackSize) {   // 下标 0、3、6、9 / 1、4、7、10 / 2、5、8、11
    this.stackArr = new Array(stackSize*3)    // 开一个大小为size三倍的数组
    // console.log(this.stackArr)
    
};
var obj = new TripleInOne(4)
// console.log(obj.stackArr)

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
//     for(let i = this.stackArr.length-1;i>-1;i--){
//         if((i+1)%3 === stackNum && this.stackArr[i] === null){
//             this.stackArr[i] = value
//         }
//     }
//     console.log(this.stackArr)
//     return this.stackArr
};

obj.push(1,1)

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {

};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {

};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {

};

