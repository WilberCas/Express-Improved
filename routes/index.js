const express = require('express');
const router =  express.Router();

// HOME page
router.get('/', (req, res, next) =>{
    res.render('index');
})

module.exports = router;