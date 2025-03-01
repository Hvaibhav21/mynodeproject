// JavaScript source code
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('projects', { title: 'Our Projects - Solar Company' });
});

module.exports = router;
