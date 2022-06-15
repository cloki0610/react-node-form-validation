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
  if (!errors.isEmpty()) {
    const error: ErrorWithStatus = new Error(
      "Invalid input, please check and try again."
    );
    error.statusCode = 422;
    throw error;
  }
  // Get form data
  const firstName = req.body.formData.firstName;
  const surName = req.body.formData.surName;
  const email = req.body.formData.email;
  const phoneNumber = req.body.formData.phoneNumber;
  const gender = req.body.formData.gender;
  const day = +req.body.formData.day;
  const month = +req.body.formData.month;
  const year = +req.body.formData.year;
  const comments = req.body.formData.comments;
  try {
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
