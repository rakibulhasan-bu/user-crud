import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./modules/student/user.route";
const app: Application = express();

//using parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
