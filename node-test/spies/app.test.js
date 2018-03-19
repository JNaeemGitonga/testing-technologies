

const expect    = require('expect')
const rewire    = require('rewire')


const app = rewire('./app')

console.dir(app.__set__)

describe('app', ()=> {

    let db = {
        saveUser: jest.fn()
    } 

    app.__set__('db', db)

    it('should call spy correctly', () => {
        let spy = jest.fn();
        spy('jaha', 30);
        expect(spy).toHaveBeenCalledWith('jaha', 30)
    })

    it('should call saveUser with user obj', () => {
        let email = 'me@jahanaeemgitonga.com'
        let pswrd = 'letemhang'

        app.handleSignup(email,pswrd)
        expect(db.saveUser).toHaveBeenCalledWith({email,pswrd})
    })

})