const express = require('express');
const config = require('../config.js');
const swaggerUi = require('swagger-ui-express');
const users = require('./components/users/network.js');
const bodyParser = require('body-parser');
const auth = require('./components/auth/network.js');
const errors = require ('../network/errors');
const post = require('./components/post/network.js');
const app = express();
const swaggerDoc=require('./swagger.json');

app.use(bodyParser.json());

app.use('/api/users' ,users);
app.use('/api/auth' , auth);
app.use('/api/post', post);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);
app.listen(config.api.port, () => {
    console.log(`Listening on port ${config.api.port}`)
})