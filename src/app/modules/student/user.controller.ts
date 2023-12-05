import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await userService.creteUserService(user);

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
  } catch (error: unknown) {
    console.log(error);
  }
};

const getAllUser = async (_req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserService();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

export const userControllers = { createUser, getSingleUser, getAllUser };
