//众数问题 分治法求解

function sortNUmber(a,b) {  //排序辅助函数
    return a-b;
}

function sortArray(arr) {   // arr 从小到大排序
    return arr.sort(sortNUmber)
}


function getModeNumber(arr,left,right) {  // 获取数组中众数
    let i,j;
    let count = 1;
    arr = sortArray(arr);
    let m = Math.round((left+right)/2);
    let middle = arr[m];  // 找到数组中间的数
    console.log(middle);


    for(i = middle;i>=left;i--){
        if(arr[i]===arr[middle]){
            count++;
        }else{
            break;
        }
    }
    for(j=middle;j<=right;j++){
        if([arr[j]===arr[middle]]){
            count++;
        }else{
            break;
        }
    }

    if()







}

let arr = [1,2,3,4,6,7];
getModeNumber(arr,0,5);
