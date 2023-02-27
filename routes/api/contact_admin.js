const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Contact = require('../../models/Contact');
const { check, validationResult } = require('express-validator');


router.get('/', auth, async (req, res) => {
    try {
    
        const contacts = await Contact.find({});
        res.json(contacts);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put(
    '/',
    auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
  
        const { id } = req.body;
  
        try {
            
            const filter = {_id: id};
            const update = {status: true};
            let updateContact = await Contact.findOneAndUpdate(filter, update);
            // console.log(id);
            res.json({data: "success"});
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
  );

router.delete(
    '/:_id',
    auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const _id = req.params._id;
            const deletedContact = await Contact.deleteOne({_id:_id});
            res.json({data: "success"});
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;