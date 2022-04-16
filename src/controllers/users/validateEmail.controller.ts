import { Request, Response } from "express";
import DB from "../../database";
import { IUser } from "../../models/user.model";

export const ValidateEmailController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const response = await DB.promisePool.query("SELECT * FROM users WHERE email=?", [email]);
    const user = response[0][0] as IUser;

    if (user) {
      return res.status(200).json({
        status: 1,
        isUsed: true,
      });
    }
    return res.status(200).json({
      status: 1,
      isUsed: false,
    });
  } catch (err) {
    return res.status(500).json({
      status: 0,
      message: "Internal Server Error",
    });
  }
};
