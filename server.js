const express = require('express')
const path = require('path')

const app = express()
const PORT = 5000
app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    // res.sendFile('/index.html', {root : __dirname})
    res.send('hello world')
})
// app.get('/', (req, res) => res.send('Home page Route!'))
app.listen(PORT, (req, res) => console.log('Server is running on port 5000'))