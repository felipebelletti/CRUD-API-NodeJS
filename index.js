const express = require('express');
const { handler } = require('./api/index.js');
const app = express();

const LISTENPORT = '8080';

app.all('/api/licenses', handler)

app.listen(LISTENPORT, () => {
    console.log(`API successfully listenning on :${LISTENPORT}`);
})
