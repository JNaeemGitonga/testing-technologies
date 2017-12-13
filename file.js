const another = require('./another');

const multiply = function (a, b) {
    if ( typeof a === 'number' && typeof b === 'number') {
        return a * b
    }
    
    else{return 'Please enter valid numbers' }
}
  



const getMiddle = function (word) {
    let length = word.length
    if (length % 2 === 1) {
        
        return word.charAt(Math.floor(length/2)) 
    }
    else if (length % 2 === 0) { 
        // console.log(length)
        let middleOne = (length/2) -1;
        let middleTwo = length/2;
        // console.log(middleOne, middleTwo)
        return word.substr(middleOne,2)
    }
}


function functionThatDoesNothin(cat, dog) {
    //I do nothing!
    dog(cat)

}

function cb(data){
    console.log(data)
}
console.log('line 39',getMiddle('asssasasasasTTasasasasas'))
console.log('line 40',process.argv[0] + process.argv[1]);
console.log('It does nothing')
console.log(process.argv)
// console.log('line 43',parseFloat(process.argv[0]) + parseFloat(process.argv[1]));

module.exports = getMiddle;
module.exports = multiply;