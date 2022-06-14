"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllData = exports.postNewData = void 0;
const postNewData = (req, res) => {
    res.status(200).json({ message: "post done" });
};
exports.postNewData = postNewData;
const getAllData = (req, res) => {
    res.status(200).json({ message: "get done" });
};
exports.getAllData = getAllData;
