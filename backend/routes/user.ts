import express from "express";
import { getAllData, postNewData } from "../controllers/user";

const router = express.Router();

router.get("/all-data", getAllData);

router.post("/new-data", postNewData);

export default router;
