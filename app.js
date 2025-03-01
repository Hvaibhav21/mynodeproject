const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/contact', contactRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
