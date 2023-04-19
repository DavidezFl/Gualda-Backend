import  express, { NextFunction, Request, Response }  from "express";
import cors from "cors";
import { router } from "./routes";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100 // request limit por IP
});

const app = express();

app.use(cors({
  origin:"*"
}));
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(limiter);

app.use("/", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


export {app};
