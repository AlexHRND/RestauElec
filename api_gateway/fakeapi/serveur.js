const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/fakeapi', (req, res, next) => {
    res.send('hello from the fakeapi')
})

app.post('/bast', (req, res, next) => {
    res.send('hello from bast')
})


app.listen(port, () => {
    console.log("Fake API started on port " + port)
})