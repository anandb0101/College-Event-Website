const express = require('express');
const router = require('express').Router();


router.get('/', (req, res, err) =>{
    console.log('welcome');
    res.render('home');
});

module.exports = router ;