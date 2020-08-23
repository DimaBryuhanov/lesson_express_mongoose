import express from 'express';

var router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Hi, there");
});

export default router;