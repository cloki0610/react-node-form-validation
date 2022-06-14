import { Request, Response } from "express";

export const postNewData = (req: Request, res: Response) => {
  res.status(200).json({ message: "post done" });
};

export const getAllData = (req: Request, res: Response) => {
  res.status(200).json({ message: "get done" });
};
