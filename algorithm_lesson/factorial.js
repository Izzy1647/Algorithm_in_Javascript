function factorial(n) {   // 阶乘 递归
    if(n===1){
        return 1;
    }else{
        return factorial(n-1)*n
    }
}

let res = factorial(4);
console.log(res);








