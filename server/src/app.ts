import  express, { NextFunction, Request, Response }  from "express";
import cors from "cors";
import { router } from "./routes";
import morgan from "morgan";

const app = express();

app.use(cors({
  origin:"*"
}));
app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


export {app};
