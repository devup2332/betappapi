import { Request, Response } from "express";
import DB from "../../database";
import { comparePassword } from "../../lib/comparePasswords";
import { generateToken } from "../../lib/generateToken";
import { IUser } from "../../models/user.model";

export const LoginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const response = (await DB.promisePool.query("SELECT * FROM users WHERE username=?", [username])) as any;
  const user = response[0][0] as IUser;
  if (!user) {
    return res.status(200).json({
      status: 1,
      message: "El usuario no existe",
    });
  }

  const match = await comparePassword(password, user.password);

  if (!match) {
    return res.status(200).json({
      status: 1,
      message: "La contrasena es incorrecta",
    });
  }

  const token = generateToken(user);

  return res.status(200).json({
    status: 1,
    token,
    message: "User logged successfully",
  });
};
