const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

router.get('/:question', auth, async (req, res) => {
    try {
        const answer = req.params.question;
        res.json(answer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  });

  module.exports = router;