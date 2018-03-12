const express       = require('express')
const app           = express()
const port          = process.env.PORT || 8080


app.use()
app.get('/',(req,res) => {
    res.send('Peace All')
})



app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})