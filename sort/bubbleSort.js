let arr = [3,4,1,2,5]

var bubbleSort = function(arr){
    if(!arr.length){
        return arr
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>=arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
    return arr
}

bubbleSort(arr)