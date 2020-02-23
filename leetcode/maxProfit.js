/**
 * @param {number[]} prices
 * @return {number}
*/

// 输入: [7,1,5,3,6,4]
// 输出: 5
let prices = [7,1,5,3,6,4]
var maxProfit = function(prices) {

    // 找最小价格和最大利润
    let lowestPrice = prices[0]
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        lowestPrice = Math.min(prices[i],lowestPrice)
        maxProfit = Math.max(prices[i] - lowestPrice,maxProfit)
    }
    return maxProfit

};