import express from 'express';
import config from './config';

const app = express();

app.get('/', (req, res, next) => {
    res.send("Hi, there");
})

app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`The server is listening on port ${config.PORT}`);
});