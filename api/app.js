
const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();
app.use(cors());

// Allow requests from frontend (update the URL when deployed)
//app.use(cors({ origin: "http://localhost:3001" })); // Change this when deploying


// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));


// Serve React build only in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

// ✅ Add this line to parse form data
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/about", require("./routes/about"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/projects", require("./routes/projects"));
app.use('/api/enquiry', require('./routes/enquiry'));
app.use('/api/home', require('./routes/home'));
app.use('/api/index', require('./routes/index'));


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


// ✅ Remove `app.listen()` - Vercel does this automatically
module.exports = app;
