'use strict';
//import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
//
app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});
//
app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Jorma',
        age: 666,
        weight: 69,
    };
    res.json(cat);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
