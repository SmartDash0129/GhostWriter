const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const computeCosineSimilarity = require('compute-cosine-similarity');
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const filePath = "embedding/data.json";
const splittingStr = "@@--##--@@";

const gpt3_embedding = async (content) => {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: content,
    });
    return response.data.data[0].embedding;
};

router.get('/:question', auth, async (req, res) => {
    try {
        let prompt = req.params.question;

        const vector = await gpt3_embedding(prompt);

        if (!fs.existsSync(filePath)) {
            res.json("File Not Found!");
        }
        else {
            fs.readFile(filePath, async (err, data) => {
                let fileData = data.toString();
                let array = fileData.split(splittingStr);
                let array_slice = array.slice(0,array.length-1);
                
                let scores = [];

                array_slice.forEach(async (element) => {
                    const elementParse = JSON.parse(element);
                    const score = computeCosineSimilarity(vector, elementParse.vector);
                    scores.push({content: elementParse.content, score: score});
                });

                let ordered = scores.sort((a, b) => b.score - a.score);
                
                const resultElement = ordered[0];
                // const promptNew = prompt + "\nUse the following passage.\n" + "{" + resultElement.content.song + "}";
                const promptNew = "Write a new lyric song based on the following passage : " + resultElement.content.song;

                // const response = await openai.createCompletion({
                //     model: "text-davinci-003",
                //     prompt: promptNew,
                //     temperature: 1.0,
                //     max_tokens: 2000,
                // });
                // let answer = response.data.choices[0].text.trim();

                const completion = await openai.createChatCompletion({
                  model: "gpt-3.5-turbo",
                  messages: [
                    {role: "system", content: "You are a ghost writer"},
                    {role: "user", content: promptNew}],
                });
                let answer = completion.data.choices[0].message.content;

                // res.json(promptNew);
                res.json(answer);
                // const resultElement = ordered[Math.floor(Math.random() * 3)];
                
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;