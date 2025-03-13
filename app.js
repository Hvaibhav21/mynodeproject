//const express = require('express');
//const path = require('path');

//const app = express();
//const PORT = process.env.PORT || 3000;

//// Set EJS as the templating engine
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

//// Serve static files
//app.use(express.static(path.join(__dirname, 'public')));

//const homeRoute = require('./routes/home');
//const aboutRoute = require('./routes/about');
//const projectsRoute = require('./routes/projects');
//const contactRoute = require('./routes/contact');

//app.use('/', homeRoute);
//app.use('/about', aboutRoute);
//app.use('/projects', projectsRoute);
//app.use('/contact', contactRoute);

//app.listen(PORT, () => {
//    console.log(`Server is running at http://localhost:${PORT}`);
//});

//module.exports = app;

const express = require('express');
const path = require('path');

const app = express();

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Add this line to parse form data
app.use(express.urlencoded({ extended: true }));

// Import routes
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const homeRoute = require('./routes/home');
const indexRoute = require('./routes/index');
const projectsRoute = require('./routes/projects');
const enquiryRoute = require('./routes/enquiry');

// Define routes
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/home', homeRoute);
app.use('/index', indexRoute);
app.use('/projects', projectsRoute);
app.use('/enquiry', enquiryRoute); 
// Home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Home - Solar Company' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

