"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("../data/database"));
const User = database_1.default.define("user", {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: sequelize_1.default.STRING,
    surName: sequelize_1.default.STRING,
    email: sequelize_1.default.STRING,
    phoneNumber: sequelize_1.default.STRING,
    gender: sequelize_1.default.STRING,
    dateOfBirth: sequelize_1.default.DATE,
    comments: sequelize_1.default.TEXT,
});
exports.default = User;
