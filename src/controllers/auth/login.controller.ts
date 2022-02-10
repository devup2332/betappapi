import { Request, Response } from "express";

export const LoginController = (req: Request, res: Response) => {
  return res.status(200).json({
    status: 1,
    message: "User logged successfully",
  });
};
