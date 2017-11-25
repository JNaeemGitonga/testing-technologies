

const multiply = function (a, b) {
    if ( typeof a === 'number' && typeof b === 'number') {
        return a * b
    }
    
    else{return 'Please enter valid numbers' }
}
  
module.exports = multiply;


// const getMiddle = function (word) {
//     let length = word.length
//     if (length % 2 === 1) {
//        return word.charAt(Math.floor(length/2)) 
//     }
//     else if (length % 2 === 0) { 
//         let middleOne = length/2;
//         let middleTwo = (length/2) - 1;
//         console.log(length/2)
//     }
// }

// module.exports = getMiddle;
// getMiddle('coon')