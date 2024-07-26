const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);

// functions
function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, 200, data);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then(data => {
            response.success(req, res, 200, data);
        })
        .catch(next);
}

function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then(data => {
            response.success(req, res, 200, data);
        })
        .catch(next);
}

function getByUser(req, res, next) {
    Controller.getByUser(req.params.id)
        .then(data => {
            response.success(req, res,200, data);
        })
        .catch(next);
}
module.exports = router;