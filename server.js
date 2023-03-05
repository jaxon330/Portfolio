const express = require('express')
const app = express()
const path = require("path")

const PORT = 3000
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })

// app.get('/', (req, res) => res.send('Home page Route!'))
app.listen(PORT, (req, res) => console.log('Server is running on port 3000'))