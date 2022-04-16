import { Request, Response } from "express";
import DB from "../../database";
import { hashPassword } from "../../lib/hashPassword";
import { IUser } from "../../models/user.model";

export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const { username, email, password, phone, role } = req.body;

    const response = (await DB.promisePool.query("SELECT * FROM users WHERE username=? OR email=?", [
      username,
      email,
    ])) as any;

    const user = response[0][0] as IUser;

    if (user) {
      return res.status(200).json({
        status: 1,
        message: "El usuario o el correo ya estan en uso",
      });
    }
    const pass = await hashPassword(password);

    const newUser: IUser = {
      password: pass,
      email,
      phone,
      username,
      role,
    };

    await DB.promisePool.query("INSERT INTO users set ?", [newUser]);
    return res.status(200).json({
      status: 1,
      message: "Usuario creado",
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      status: 0,
      message: "Servidor no responde",
    });
  }
};
