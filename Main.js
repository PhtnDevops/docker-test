const express = require('express')
const app = express()

app.get('/interview', (req, res) => res.send('Hello World!'))

app.listen(7070, () => console.log('This app listening on port 7070'))