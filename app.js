const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const homeRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');

// Use routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/contact', contactRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
