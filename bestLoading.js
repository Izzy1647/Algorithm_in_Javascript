// 4.3  最优装载 贪心算法
function sortNumber(a,b) {
    return a-b;
}


function bestLoading(wArray,c) {  // w[] c

    let remain = parseInt(c);
    wArray.sort(sortNumber);  //升序排列输入的w数组
    // console.log(wArray);

    let resArray = new Array(wArray.length);
    console.log(wArray.length);
    for(let i = 0;i<wArray.length;i++){
        resArray[i] = 0;
    }
    for(let i=0;i<wArray.length;i++){
        if(wArray[i]<remain){
            resArray[i] = 1;
            remain -= wArray[i];
        }
    }
    console.log(resArray);

    return resArray;

}


let w = [10,32,4,13,54,3];
bestLoading(w,12);
