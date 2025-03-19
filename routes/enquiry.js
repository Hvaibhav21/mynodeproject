const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        email: "contact@solarcompany.com",
        phone: "+1 234 567 890",
        address: "123 Solar Street, Sun City, USA"
    });
});

module.exports = router;
