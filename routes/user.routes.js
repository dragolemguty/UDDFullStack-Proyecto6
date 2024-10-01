const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization');

const { findAll, findOne, create, update, remove } = require("../controllers/user.controller");

router.get("/", auth, findAll);
router.get("/:id", auth, findOne);
router.post("/", create);
router.put("/:id", auth, update);
router.delete("/:id", auth, remove);

module.exports = router;