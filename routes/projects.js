const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        projects: [
            { id: 1, name: "Solar Farm Installation", location: "California" },
            { id: 2, name: "Rooftop Solar Panels", location: "New York" }
        ]
    });
});

module.exports = router;
