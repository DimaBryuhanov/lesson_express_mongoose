import express from 'express';
import path from 'path';
import pug from 'pug';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routers/index.js';
import config from './config/index.js';

const app = express();
const __dirname = path.resolve();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// requests parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
// Routs
app.use('/', indexRouter);
// addons
app.use(logger('dev'));
app.use(cookieParser());


app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`The server is listening on port ${config.PORT}`);
});

//DONE: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
//NEXT: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose