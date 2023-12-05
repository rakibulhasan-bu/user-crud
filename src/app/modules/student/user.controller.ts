import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.creteUserService(user);

    const changeResult = { ...result.toObject(), password: undefined };

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: changeResult,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.getSingleUserService(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
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

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const result = await userService.updateSingleUserService(userId, user);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = req.body;
    const result = await userService.addOrderService(userId, order);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order created unsuccessful!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.getSingleUserService(userId);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order found unsuccessful!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: { orders: result?.orders },
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

const totalPriceOfOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.getSingleUserService(userId);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order found unsuccessful!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: { orders: result?.orders },
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

export const userControllers = {
  createUser,
  getSingleUser,
  getAllUser,
  updateSingleUser,
  addOrder,
  getAllOrder,
  totalPriceOfOrder,
};
