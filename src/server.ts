import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { environments } from "./environemts";
import ApiRouter from "./routes/api.router";
import passport from "passport";
import JwtStrategy from "./middlewares/auth.middleware";

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
passport.use("jwt", JwtStrategy);

server.use("/api", ApiRouter);

server.listen(environments.PORT, () => {
  console.log(`Serve on port ${environments.PORT}`);
});

export default server;
