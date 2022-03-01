import { Request, Response } from "express";
import DB from "../../database";
import User, { IUser } from "../../models/user.model";

export const GetProfileController = async (req: Request, res: Response) => {
  const { id } = req.user as any;
  const response = (await DB.promisePool.query("SELECT * FROM users WHERE id=?", [id])) as any;
  const user = response[0][0] as IUser;
  const userClass = new User(user);
  return res.status(200).json({
    status: 1,
    id,
    user: userClass,
  });
};
