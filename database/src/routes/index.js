const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");
const { response } = require("../utils");
const { catchedAsync } = require("../utils");

const router = Router();

router.get(
  "/:model",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const data = await store[model].getAll();
    response(res, 200, data);
  })
);

router.get(
  "/:model/:id",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    const data = await store[model].getById(id);
    response(res, 200, data);
  })
);

router.post(
  "/:model",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const addElementToDB = req.body;
    const data = await store[model].postToDB(addElementToDB);
    response(res, 200, data);
  })
);

module.exports = router;
