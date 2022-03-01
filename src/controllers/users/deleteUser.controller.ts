import { Request, Response } from "express";
import DB from "../../database";

export const DeleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await DB.promisePool.query("DELETE FROM users WHERE id=?", [id]);

    return res.status(200).json({
      status: 1,
      id,
      message: "Usuario eliminado",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "Server Internal Error",
    });
  }
};
