/**
 * @param {number[]} ratings
 * @return {number}
 */

 // wrong
 
let ratings = [1,0,2]
var candy = function(ratings) {
    let numbers = new Array(ratings.length)
    for(let i=0;i<numbers.length;i++){numbers[i] = 1}

    for(let i=0;i<numbers.length;i++){
        if(ratings[i]>ratings[i-1] && numbers[i]<=numbers[i-1]){
            numbers[i] = numbers[i-1]+1
        }
    }
    
    let sum = 0
    for(let i in numbers){
        sum += numbers[i]
    }
    console.log(numbers)
    return sum
};

console.log(candy(ratings))