const express = require('express') 
const app = express()
const port = process.env.port || 80;

app.get('/ping', (req, res) => {
    res.send('pong!')
});

const server = app.listen(port, () => {
    console.log(`server on ${port}`)
});