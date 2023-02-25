'use strict';

const express = require('express');

// Constants
const PORT = 3011;
const HOST = '0.0.0.0';

// App
const app = express()
app.set('trust proxy',true); 
app.get('/', (req, res) => {
    res.send('Hello World from Auth service from Like Service 1234');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
