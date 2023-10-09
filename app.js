import express from 'express';
const app = express();
let port = process.env.port || 3000;

app.get('/ping', (req, res) => {
    res.send('pong!');
});

const server = app.listen(port, () => {
    console.log(`server on ${port}`);
});