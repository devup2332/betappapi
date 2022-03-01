import { Request, Response } from "express";
import { comparePassword } from "../../lib/comparePasswords";
import DB from "../../database";
import { IUser } from "../../models/user.model";
import { hashPassword } from "../../lib/hashPassword";

export const ChangePasswordController = async (req: Request, res: Response) => {
  try {
    const { current, password } = req.body;
    const { id } = req.user as any;
    const response = await DB.promisePool.query("SELECT * FROM users WHERE id=?", [id]) as any;
    const user = response[0][0] as IUser;
    console.log(user);

    const match = await comparePassword(current, user.password);
    if (!match) {
      return res.status(200).json({
        status: 0,
        message: "Contrasena Incorrecta",
      });
    }
    const hash = await hashPassword(password);
    await DB.promisePool.query("UPDATE users SET password=? WHERE id=?", [hash, id]);
    return res.status(200).json({
      status: 1,
      message: "Contrasena cambiada",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      messagE: "Internal Server Error",
    });
  }
};
