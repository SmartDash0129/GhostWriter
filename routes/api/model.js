const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const {exec} = require('child_process');

router.get('/', auth, async (req, res) => {
    try {
        await exec("dir", (error, stdout, stderr) => {
            let response = '';
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            response = stdout;
            res.json(response);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;