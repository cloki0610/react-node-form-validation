import express from "express";
import userRoutes from "./routes/user";

const app = express();

app.use("/", userRoutes);

app.listen(8080);
