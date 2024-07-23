const express = require('express');
const config = require('../config.js');
const swaggerUi = require('swagger-ui-express');
const users = require('./components/users/network.js');
const bodyParser = require('body-parser');

const app = express();
const swaggerDoc=require('./swagger.json');

app.use(bodyParser.json());

app.use('/api/users' ,users);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log(`Listening on port ${config.api.port}`)
})