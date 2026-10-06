import express from 'express';
import userRouter from './router/userrouter.js';

const app = express();

import route from 'core';
app.use(core())
app.use(express.json());
app.use(route)

const port = 4000;

app.get('/', (req, res) => {
    res.send("welcome to backend");
});

app.listen(port, () => {
    console.log('Server is running in port',port);
});