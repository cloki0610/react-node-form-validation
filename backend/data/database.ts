import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/userdata.sqlite",
});

export default sequelize;
