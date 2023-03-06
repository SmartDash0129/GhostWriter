const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const fs = require('fs');
const {exec} = require('child_process');

const { Configuration, OpenAIApi } = require("openai");
const computeCosineSimilarity = require("compute-cosine-similarity");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getEmbedding = async (content) => {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: content,
    });
    return response.data.data[0].embedding;
    // return "sdlkfjlkej";
}

router.post('/', auth, async (req, res) => {
    try {
        const { artist, genre, title, song } = req.body;
        let record = {};
        const content = req.body;

        const splittingStr = "@@--##--@@";

        let vector = await getEmbedding(JSON.stringify(content));

        record = {content, vector};

        const filePath = "embedding/data.json";
        if (!fs.existsSync(filePath)) {
            fs.open(filePath, 'w', function (err, file) {
                if (err) throw err;
            });
        }
        fs.appendFile(filePath, JSON.stringify(record) + splittingStr , function (err) {
            if (err) throw err;
            console.log('Added!');
            res.json("added");
          });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;