const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up view engine
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

// Default error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server only if not running on Vercel
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app; // Required for Vercel
