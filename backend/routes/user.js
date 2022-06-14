"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
router.get("/all-data", userController.getAllData);
router.post("/new-data", userController.postNewData);
exports.default = router;
