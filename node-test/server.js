const express       = require('express')
const app           = express()
const port          = process.env.PORT || 8080


app.get('/',(req,res) => {
    res.status(404).send({error:'not found'})
})



app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

module.exports = {
    app
}