const express = require('express');
const config = require('../config.js');
const users = require('./components/users/network.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/api/users' ,users);

app.listen(config.api.port, () => {
    console.log(`Listening on port ${config.api.port}`)
})