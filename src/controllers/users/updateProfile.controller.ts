import { Request, Response } from "express";
import DB from "../../database";
import User from "../../models/user.model";

export const UpdateProfileController = async (req: Request, res: Response) => {
  const { id } = req.user as any;
  const { phone, email, username, role } = req.body;
  const data = {
    phone,
    email,
    username,
    role,
  };

  const response = (await DB.promisePool.query("UPDATE users SET ? WHERE id=?", [data, id])) as any;
  const user = response[0][0] as User;
  return res.status(200).json({
    status: 1,
    message: "Usuario actualizado",
  });
};
