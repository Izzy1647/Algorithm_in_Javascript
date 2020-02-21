// 2.3

function binarySearch(arr,target) {
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        let middle = Math.round((left+right)/2);   // middle index
        if(target === arr[middle]){
            return middle;
        }
        if(target<arr[middle]){
            right = middle - 1;
        }
        if(target>arr[middle]){
            left = middle + 1;
        }
    }

    let i = right;
    let j = left;

    return {i,j};   // can not find target in this arr

}



let arr = [1,2,4,5,6,7,8,9];
let target = 8;

let result = binarySearch(arr,target);
console.log(result);





