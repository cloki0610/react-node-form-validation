import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import userRoutes from "./routes/user";
import sequelize from "./data/database";

const app = express();
app.use(express.json());

app.use("/", userRoutes);

const errorMiddleware: ErrorRequestHandler = (
  error: { statusCode: number; message: string; data: any },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
};

app.use(errorMiddleware);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8080);
});
