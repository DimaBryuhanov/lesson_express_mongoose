import express from 'express';
import config from './config';

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.send("Hi, there");
})

app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`The server is listening on port ${config.PORT}`);
});