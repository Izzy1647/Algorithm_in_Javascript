/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */

// 输入:
// A = [0], m = 0
// B = [1],       n = 1
var merge = function(a, m, b, n) {
    if(m===0){
        for(let i=0;i<a.length;i++){
            a[i] = b[i]
        }
        return a
    }

    let i = m - 1
    let j = n - 1
    let end = a.length - 1
    while(i>=0 && j>=0){
        if(a[i]<=b[j]){
            a[end] = b[j]
            j--
        }else{
            a[end] = a[i]
            i--
        }
        end--
    }

    if(j>=0){
        for(let k = j;k>-1;k--){
            a[k] = b[k]
        }
    }
    return a
};