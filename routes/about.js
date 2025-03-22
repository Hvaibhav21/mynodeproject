const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to the About API",
        company: "Solar Energy Solutions",
        mission: "Providing clean and sustainable solar energy solutions."
    });
});

module.exports = router;
