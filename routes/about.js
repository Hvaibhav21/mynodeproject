// JavaScript source code
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', { title: 'About Us - Solar Company' });
});

module.exports = router;
