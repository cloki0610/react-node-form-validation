import Sequelize from "sequelize";

import seq from "../data/database";

const User = seq.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: Sequelize.STRING,
    surName: Sequelize.STRING,
    email: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    gender: Sequelize.STRING,
    dateOfBirth: Sequelize.DATE,
    comments: Sequelize.TEXT,
  },
  {
    timestamps: false,
  }
);

export default User;
