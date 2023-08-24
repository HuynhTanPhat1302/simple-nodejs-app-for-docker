'use strict';

const express = require( 'express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('<h2 style="color: orange; text-align:center">PhatAWS version codebuild</h2>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);