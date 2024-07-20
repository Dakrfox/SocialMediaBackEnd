const express = require('express');
const config = require('../config.js');
const users = require('./components/users/network.js');

const app = express();

app.use('/api/users' ,users);

app.listen(config.api.port, () => {
    console.log(`Listening on port ${config.api.port}`)
})