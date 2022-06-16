import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/user";

interface ErrorWithStatus extends Error {
  statusCode?: number;
}

export const postNewData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle validation result
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error: ErrorWithStatus = new Error(
        "Invalid input, please check and try again."
      );
      error.statusCode = 422;
      throw error;
    }
    // Get form data
    const firstName = req.body.firstName;
    const surName = req.body.surName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const gender = req.body.gender;
    const day = +req.body.day;
    const month = +req.body.month;
    const year = +req.body.year;
    const comments = req.body.comments;
    await User.create({
      firstName: firstName,
      surName: surName,
      email: email,
      phoneNumber: phoneNumber,
      gender: gender,
      dateOfBirth: new Date(year, month, day),
      comments: comments,
    });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
  // Response
  res.status(200).json({ message: "Record successfully created." });
};

export const getAllData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await User.findAll();
    res.status(200).json({ userData, message: "Fetch all data." });
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
