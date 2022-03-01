import { Request, Response } from "express";
import DB from "../../database";

export const ValidateUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const response = (await DB.promisePool.query("SELECT * FROM users WHERE username=?", [username])) as any;
    const user = response[0][0];
    if (user) {
      return res.status(200).json({
        status: 0,
        message: "El usuario ya esta en uso",
      });
    }
    return res.status(200).json({
      status: 1,
      message: "El usuario es valido",
    });
  } catch (err) {
    return res.status(500).json({
      status: 0,
      message: "Internal Server Error",
    });
  }
};
