// 栈的js实现 (数组方式)

var Stack = function(stackSize){   // 构造函数
    this.stackArr = new Array(stackSize)
    this.top = -1

    console.log('Initiate a stack,size:',stackSize)
}

Stack.prototype.push = function(value){
    if(this.top !== this.stackArr.length - 1){
        this.stackArr[this.top+1] = value
        this.top++
        console.log(this.stackArr,"top:",this.top)
    }else{
        console.log("Full stack already.")
        return
    }
}

Stack.prototype.pop = function(){
    if(this.top === -1){
        console.log("Empty stack.")
        return
    }else{
        let popped = this.stackArr[this.top]     // 数组中元素还在 但是top--了 之后再push会覆盖
        this.top--

        console.log("popped:",popped," top:",this.top)   
        return popped
    }
}


let stackA = new Stack(10)
stackA.push(10)
stackA.pop()

