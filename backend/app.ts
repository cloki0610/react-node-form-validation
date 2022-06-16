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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

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
  return res.sendStatus(status).json({ message: message, data: data });
};

app.use(errorMiddleware);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8080);
});
