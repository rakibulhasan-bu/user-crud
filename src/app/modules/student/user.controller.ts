import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.creteUserService(user);

    res.send(201).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

export const userControllers = { createUser };
