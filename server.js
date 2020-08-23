import express from 'express';
import path from 'path';
import pug from 'pug';
import indexRouter from './routers/index.js';
import config from './config/index.js';

const app = express();
const __dirname = path.resolve();

// app.use(logger('dev'));
// app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);


app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`The server is listening on port ${config.PORT}`);
});