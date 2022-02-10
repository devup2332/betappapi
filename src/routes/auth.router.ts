import { Router } from "express";
import { LoginController } from "../controllers/auth/login.controller";
import { SingUpController } from "../controllers/auth/singup.controller";

const router = Router();

router.post("/login", LoginController);
router.post("/signup", SingUpController);

export default router;
