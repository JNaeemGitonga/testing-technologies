const multiply = require('./file');


test('should return multiplied numbers', () => {
    expect(multiply(2,3)).toBe(6)
})
  
test('multiply string by number, should return string', () => {
    expect(multiply('a',3)).toBe('Please enter valid numbers')
})