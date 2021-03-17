'use strict';
//import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
//
app.get('/', (req, res) => {
  res.render('index');
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
