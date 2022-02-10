import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { environments } from "./environemts";
import ApiRouter from "./routes/api.router";

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api", ApiRouter);

server.listen(environments.PORT, () => {
  console.log(`Serve on port ${environments.PORT}`);
});

export default server;
