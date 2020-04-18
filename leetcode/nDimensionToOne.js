let arr = [1,2,[1,2,3],[1,[1,[1,[1]]]]]

var nDimensionToOne = function(arr){
    console.log(arr.toString())
    let strArr = arr.toString().split(',')
    console.log(strArr)
    let res = strArr.map(x=>{
        return Number(x)
    })
    return res

}

console.log(nDimensionToOne(arr))

