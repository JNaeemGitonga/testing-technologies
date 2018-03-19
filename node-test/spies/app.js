var db        = require('./db');


const handleSignup = (email, pswrd) => {
    //check if email exists
    db.saveUser({
        email,
        pswrd
    })
    //send welcome email 
}


module.exports = {
    handleSignup
}