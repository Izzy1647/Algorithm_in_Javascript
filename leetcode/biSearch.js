// 二分查找
let arr = [1,2,6,4,5]
let target = 9

// 循环版本
function biSearch(arr,target){
    arr.sort((a,b)=>a-b)    // 升序排列
    console.log(arr)

    let r = arr.length - 1 
    let l = 0
    while(l<r){
        let pivot = Math.round((l+r)/2)
        if(arr[pivot] === target){
            return pivot
        }else if(arr[pivot] < target){
            l = pivot + 1
        }else{
            r = pivot - 1
        }
    }

    return -1
}

let res = biSearch(arr,target)
console.log(res)

// 递归版本
function biSearch2(arr,target,l,r){
    if(r < l){    // 找不到的终止条件
        return -1
    }
    arr.sort((a,b)=>a-b)
    let pivot = Math.round((l+r)/2)
    if(arr[pivot] === target){
        return pivot
    }else if(arr[pivot] < target){
        return biSearch2(arr,target,pivot+1,r)
    }else{
        return biSearch2(arr,target,0,pivot-1)
    }
}

let res2 = biSearch2(arr,target,0,arr.length-1)
console.log(res2)