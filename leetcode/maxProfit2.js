/**
 * @param {number[]} prices
 * @return {number}
 */

let prices = [7,1,5,3,6,4]
var maxProfit = function(prices) {
    let res = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<prices[i+1]){
            res += prices[i+1] - prices[i]
        }
    }
    return res



    // shit code below
    
    // let profits = new Array(prices.length)
    // profits[0] = 0
    // let res = 0
    // let i = 1
    // let valley = prices[0]
    // while(i<prices.length){
    //     if(prices[i]>=valley){
    //         profits[i] = prices[i] - valley
    //         valley = prices[i]
    //     }else{
    //         profits[i] = 0
    //         valley = prices[i]
    //     }
    //     i++
    // }
    // for(let i of profits){
    //     res += i
    // }
    // return res


};

console.log(maxProfit(prices))