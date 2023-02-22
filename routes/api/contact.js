const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Contact = require('../../models/Contact');

// @route    POST api/contact
// @desc     send Message
// @access   Public
router.post(
    '/',
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Please include a message').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, message } = req.body;

        const contact = new Contact({
            name,
            email,
            message
          });
        await contact.save();
        res.json({data: "success"});
        try {
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
