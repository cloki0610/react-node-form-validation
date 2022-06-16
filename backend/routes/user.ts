import express from "express";
import { body } from "express-validator";
import * as userController from "../controllers/user";

const router = express.Router();

router.get("/", userController.getAllData);

router.post(
  "/new-data",
  [
    body("firstName").trim().notEmpty().isString().isLength({ min: 3 }),
    body("surName").trim().notEmpty().isString().isLength({ min: 3 }),
    body("email").trim().isEmail().normalizeEmail().notEmpty(),
    body("phoneNumber").trim().isNumeric().isLength({ min: 8 }),
    body("gender").notEmpty(),
    body("day")
      .trim()
      .notEmpty()
      .isLength({ max: 2 })
      .isInt({ min: 1, max: 31 }),
    body("month")
      .trim()
      .notEmpty()
      .isLength({ max: 2 })
      .isInt({ min: 1, max: 12 }),
    body("year")
      .trim()
      .notEmpty()
      .isLength({ min: 4 })
      .isInt({ min: 1900, max: 2022 }),
    body("comments").trim().notEmpty().isLength({ max: 255 }),
  ],
  userController.postNewData
);

export default router;
