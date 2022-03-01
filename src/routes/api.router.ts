import { Router } from "express";
import AuthRouter from "./auth.router";
import UsersRouter from './users.router'

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UsersRouter);

export default router;
