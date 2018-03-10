module.exports = {
    add: (a,b) => a+b,
    square: a => a * a,
    setName: (u,fName) => {
        let name = fName.split(' ')
        u.firstName = name[0]
        u.lastName = name[1]
        return u
    },
    asyncAdd: (a,b,cb) => {
        setTimeout(() => {
            cb(a+b) 
        },1000)
    },
    asyncSquare: (a,cb) => {
        setTimeout(() => {
            cb(a*a)
        })
    }
}
