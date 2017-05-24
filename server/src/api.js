const express = require('express');
const bodyParser = require('body-parser');

function createApi(store) {
    const app = express();

    app.use(bodyParser.json());
    
}