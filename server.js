import express from 'express';
import indexRouter from './routers/index.js';
import config from './config/index.js';

const app = express();

// app.use(logger('dev'));
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', indexRouter);


app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`The server is listening on port ${config.PORT}`);
});