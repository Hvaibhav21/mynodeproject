const express = require('express');
const router = express.Router();

// Middleware to parse form data
router.use(express.urlencoded({ extended: true }));

// Render the enquiry form
router.get('/', (req, res) => {
    res.render('enquiry', { successMessage: null });
});

// Handle form submission
router.post('/', (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.render('enquiry', { successMessage: 'All fields are required!' });
    }

    console.log(`New Enquiry:\n Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}`);

    // Send success message after submission
    res.render('enquiry', { successMessage: 'Your enquiry has been submitted successfully!' });
});

module.exports = router;
