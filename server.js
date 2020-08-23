import express from 'express';
const PORT = 3000;

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hi, there");
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`The server is listening on port ${PORT}`);
});