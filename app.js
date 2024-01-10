const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('My first API')
});

module.exports = app;