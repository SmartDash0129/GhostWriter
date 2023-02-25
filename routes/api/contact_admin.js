const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Contact = require('../../models/Contact');


router.get('/', auth, async (req, res) => {
    try {
    
        // const contacts = await Contact.find({});
        const contacts = "dslfkje";
        res.json(contacts);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;