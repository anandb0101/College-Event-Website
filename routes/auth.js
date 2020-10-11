const express = require('express');
const router = require('express').Router();


router.get('/', (req, res, err) =>{
    console.log('welcome to Home');
    res.render('home');
});
router.get('/login', (req, res, err) =>{
    console.log('welcome to login page');
    res.render('login');
});
router.get('/event', (req, res, err) =>{
    console.log('welcome to event page');
    res.render('event');
});

module.exports = router ;