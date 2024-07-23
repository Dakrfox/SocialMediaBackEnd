const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();


router.get('/', list)
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);


function list(req, res) {
  Controller.getAll()
    .then((lista) => {
      response.success(req, res,200, lista);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
};

function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, 200, user);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
};
function upsert(req, res) {
  Controller.upsert(req.body)
      .then((user) => {
          response.success(req, res, 200, user);
      })
      .catch((err) => {
          response.error(req, res, 500, err.message);
      });
  
}

module.exports = router;
