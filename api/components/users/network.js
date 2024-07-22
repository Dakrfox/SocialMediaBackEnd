const express = require("express");
const response = require("../../../network/response");
const router = express.Router();
const Controller = require("./index");
router.get("/", function (req, res) {
  Controller.getAll()
    .then((lista) => {
      response.success(req, res,200, lista);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
});

router.get("/:id", function (req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, 200, user);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
});
module.exports = router;
