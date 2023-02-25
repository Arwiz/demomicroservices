'use strict';

const express = require('express');

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('trust proxy',true); 
app.get('/', (req, res) => {
    res.send('Hello World from Auth service from 1267 5');
});

app.listen(PORT, HOST, () => {
    console.log(`Running Auth on http://${HOST}:${PORT}`);
});
