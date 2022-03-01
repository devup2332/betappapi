import { Router } from "express";
import passport from "passport";
import { ChangePasswordController } from "../controllers/users/changePassword.controller";
import { CreateUserController } from "../controllers/users/createUser.controller";
import {DeleteUserController} from "../controllers/users/deleteUser.controller";
import { GetProfileController } from "../controllers/users/getProfile.controller";
import { GetUsersController } from "../controllers/users/getUsers.controller";
import { UpdateProfileController } from "../controllers/users/updateProfile.controller";
import {ValidateEmailController} from "../controllers/users/validateEmail.controller";
import { ValidateUsername } from "../controllers/users/validateUsername.controller";

const router = Router();

router.get("/profile", passport.authenticate("jwt", { session: false }), GetProfileController);
router.get("/", passport.authenticate("jwt", { session: false }), GetUsersController);
router.put("/profile", passport.authenticate("jwt", { session: false }), UpdateProfileController);
router.post("/", passport.authenticate("jwt", { session: false }), CreateUserController);
router.post("/validateUsername", passport.authenticate("jwt", { session: false }), ValidateUsername);
router.post("/changePassword", passport.authenticate("jwt", { session: false }), ChangePasswordController);
router.delete("/:id", passport.authenticate("jwt", { session: false }), DeleteUserController);
router.post("/validateEmail", passport.authenticate("jwt", { session: false }), ValidateEmailController);

export default router;
