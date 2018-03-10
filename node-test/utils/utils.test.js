const utils     = require('./utils')
const chai      = require('chai')
const assert    = chai.assert
const expect    = chai.expect


describe('Simple functions', () => {

    it('should add two numbers', () => {
        let res = utils.add(9,33)
        // if (res !== 42) throw new Error( `expected 42 but got ${res}`)
        assert.equal(res, 42, 'something fucked up')
    })
    
    it('should square a number', () => {
        let res = utils.square(5)
        // if (res !==  25) throw new Error(`expected 25 but got ${res}`)
        assert.equal(res,25)
        assert.typeOf(res, 'number')
    })
    it ('should verify first and last names are set', () => {
        let res = utils.setName({},'Jaha Gitonga')
        // console.log(res)
        expect(res).to.have.property('firstName')
        expect(res).to.have.property('lastName')
        expect(res).property('lastName').equal('Gitonga')
        assert.typeOf(res,'object')
    })

    /*
    
        For ASYNC TESTING:
            you must use the done() as in the 
            example on line 37

    */
    it('should asyncAdd two numbers', done => {
        utils.asyncAdd(4,3, sum => {
            assert.equal(sum,7);
            done()
        })
    })

    it('should asyncSquare two numbers', done => {
        utils.asyncSquare(4, square => {
            assert.equal(square, 16)
            assert.typeOf(square, 'number')
            done()
        })
    })
})

