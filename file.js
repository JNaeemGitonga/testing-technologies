

const multiply = function (a, b) {
    if ( typeof a === 'number' && typeof b === 'number') {
        return a * b
    }
    else{return 'Please enter valid numbers' }
}
  

module.exports = multiply;