const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Home Page",
        description: "This is the solar company home page."
    });
});

module.exports = router;
