const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Index Page",
        services: ["Solar Installation", "Consulting", "Maintenance"]
    });
});

module.exports = router;
