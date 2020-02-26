// 快速排序

let arr = [12,4,37,6,41,2]
var quickSort = function(arr,i,j){
    if(i < j) {
        let left = i;
        let right = j;
        let pivot = arr[left];
        while(left < right) {
          while(arr[right] >= pivot && left < right) {  // 从后往前找比基准小的数
            right--
          }
          if(left < right) {
            [arr[left],arr[right]] = [arr[right],arr[left]]   // 交换
          }
          while(arr[left] <= pivot && left < right) {  // 从前往后找比基准大的数
            left++;
          }
          if(left < right) {
            [arr[left],arr[right]] = [arr[right],arr[left]];
          }
        }
        
        quickSort(arr, i, left-1);
        quickSort(arr, left+1, j);
        return arr;
      }
}

console.log(quickSort(arr,0,arr.length-1))