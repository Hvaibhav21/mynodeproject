
const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();

// Allow requests from frontend (update the URL when deployed)
app.use(cors({ origin: "http://localhost:3001" })); // Change this when deploying

// Serve React build only in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

// ✅ Add this line to parse form data
app.use(express.urlencoded({ extended: true }));

// Import routes
//const aboutRoute = require('./routes/about');
//const contactRoute = require('./routes/contact');
//const homeRoute = require('./routes/home');
//const indexRoute = require('./routes/index');
//const projectsRoute = require('./routes/projects');

const homeRoute = require('./routes/home');
const indexRoute = require('./routes/index');

// API routes
app.use("/api/about", require("./routes/about"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/projects", require("./routes/projects"));

app.use('/api/enquiry', require('./routes/enquiry'));
app.use('/api/home', homeRoute);
app.use('/api/index', indexRoute);


app.get("/", (req, res) => {
    res.send("Welcome to the Solar Company API!");
});

app.get("/api/data", (req, res) => {
    res.json({
        company: "Solar Energy Solutions",
        services: ["Solar Panel Installation", "Maintenance", "Consulting"],
        location: "New York, USA"
    });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

