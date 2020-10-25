const mockApi = require('./mockAPI.js');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

// This serves to not to expose the credentials in the public repo
dotenv.config();

const app = express();
app.use(express.static('dist'));

// Use body parser as middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS for cross origin allowance
// Cors for cross origin allowance
app.use(cors());

// Defines the rounting to render de home page
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// Designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

// Recieves the information inputed on the interface and makes another request
// to fetch the NPL results
app.post('/nplApi', nplApi);

function nplApi (req, res) {
    // declare the variables to be used in the API request
    const endpoint = 'https://api.meaningcloud.com/sentiment-2.1';
    const key = process.env.API_KEY;
    const txt = req.body.reqBody
    const model = 'general';
    const lang = 'en';
    const url = `${endpoint}?key=${key}&of=json&txt=${txt}&model=${model}&lang=${lang}`;

    const response = mockApi.apiResponse(url)
    .then(function (response) {
        res.send(response);
    })
};
