import express from "express";
import userRoutes from "./routes/user";
import sequelize from "./data/database";

const app = express();
app.use(express.json());

app.use("/", userRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8080);
});
