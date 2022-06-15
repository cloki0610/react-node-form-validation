import express from "express";
import { body } from "express-validator";
import * as userController from "../controllers/user";

const router = express.Router();

router.get("/", userController.getAllData);

router.post(
  "/new-data",
  [
    body("firstName").trim().notEmpty().isString().isLength({ min: 2 }),
    body("surName").trim().notEmpty().isString().isLength({ min: 2 }),
    body("email").trim().isEmail().normalizeEmail().notEmpty(),
    body("phoneNumber").trim().isNumeric().isLength({ min: 8 }),
    body("gender").notEmpty(),
    body("day").trim().notEmpty().isLength({ max: 2 }),
    body("month").trim().notEmpty().isLength({ max: 2 }),
    body("year").trim().notEmpty().isLength({ min: 4 }),
    body("comments").trim().notEmpty(),
  ],
  userController.postNewData
);

export default router;
