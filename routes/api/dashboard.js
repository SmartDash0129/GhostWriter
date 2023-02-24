const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.get('/:question', auth, async (req, res) => {
    try {
        let prompt = req.params.question;
        // const response = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: `${prompt}`,
        //     temperature: 0,
        //     max_tokens: 3000,
        //     top_p: 1,
        //     frequency_penalty: 0.5,
        //     presence_penalty: 0,
        // });
        // res.json(response.data.choices[0].text);
        const response = "The answer is ok\nGood\nSuccess";
        res.json(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;