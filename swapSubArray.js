// 2-8
function swap(arr,left,right,length){
    for(let i = left;i<=length;i++){
        let temp = arr[i];
        arr[i] = arr[right-length+1];
        arr[right-length+1] = temp;
    }
}

function partition(arr,left,right,k) {  // k : partition position
    if(left<right){
        if((k-left) === (right-k+1)){
            swap(arr,left,right,k-left+1);
        }
        else if((k-left) < (right-k+1)){
            swap(arr,left,right,k-left+1);     // left subarray smaller than right subarray
            partition(arr,left,right-(k-left+1));
        }
        else{
            swap(arr,left,right,right-k+1);

            partition(arr,left+(right-k+1),right,k);
        }
    }
}

let arr1 = [1,2,3,4,5,6,7,8];
let res = partition(arr1,0,7,1);

console.log(res)
