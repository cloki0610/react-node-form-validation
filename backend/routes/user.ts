const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/", userController.getAllData);

router.post("/new-data", userController.postNewData);

export default router;
