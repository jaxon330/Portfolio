const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000
// app.use(express.static(__dirname));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html')
// })
app.get('/', (req, res) => res.send('Home page Route!'))
app.listen(PORT, (req, res) => console.log('Server is running on port 5000'))