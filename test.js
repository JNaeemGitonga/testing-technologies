const multiply = require('./file');


test('should return multiplied numbers', function() {
    expect(multiply(2,3)).toBe(6)
})
  
test('multiply string by number, should return string', function() {
    expect(multiply('a',3)).toBe('Please enter valid numbers')
})