import { NextFunction, Request, Response } from "express";
import User from "../models/user";

export const postNewData = (req: Request, res: Response) => {
  res.status(200).json({ message: "post done" });
};

export const getAllData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await User.findAll();
    res.status(200).json({ userData });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
