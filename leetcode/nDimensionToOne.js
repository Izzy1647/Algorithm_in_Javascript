let arr = [1,2,[1,2,3],[1,[1,[1,[1]]]]]

var nDimensionToOne = function(arr){
    let strArr = arr.toString().split(',')
    let res = strArr.map(x=>{
        return Number(x)
    })
    return res

}

console.log(nDimensionToOne(arr))

