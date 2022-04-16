import { Request, Response } from "express";
import DB from "../../database";
import User, { IUser } from "../../models/user.model";

export const GetUsersController = async (req: Request, res: Response) => {
  const response = (await DB.promisePool.query("SELECT * FROM users")) as any;
  const users = response[0] as IUser[];
  const usersClass = users.map((user) => {
    return new User(user);
  });
  return res.status(200).json({
    status: 1,
    users: usersClass,
  });
};
