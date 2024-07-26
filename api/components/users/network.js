const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require('./secure');

const router = express.Router();


router.get('/', list);
router.post('/follow/:id', secure('follow'), follow);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);


function list(req, res, next) {
  Controller.getAll()
    .then((lista) => {
      response.success(req, res,200, lista);
    })
    .catch(next)
  }
function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, 200, user);
    })
    .catch(next)
};
function upsert(req, res, next) {
  Controller.upsert(req.body)
      .then((user) => {
          response.success(req, res, 200, user);
      })
      .catch(next)
}

function follow(req, res, next) {
    Controller.follow(req.user.id, req.params.id)
    .then(data =>{
      response.success(req, res, 200, data);
    })
    .catch(next);
}  
module.exports = router;
