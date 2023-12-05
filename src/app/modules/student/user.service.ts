import { TOrder } from "../order/order.interface";
import { TUser } from "./user.interface";
import User from "./user.model";

const creteUserService = async (userData: TUser) => {
  return await User.create(userData);
};

const getSingleUserService = async (userId: string) => {
  return await User.findOne({ userId });
};

const getAllUserService = async () => {
  return await User.find({});
};

const updateSingleUserService = async (userId: string, updateUser: TUser) => {
  return await User.findOneAndUpdate({ userId }, updateUser, {
    new: true,
  });
};

const addOrderService = async (userId: string, order: TOrder) => {
  return await User.findOneAndUpdate(
    { userId },
    { $push: { orders: order } },
    { new: true }
  );
};

export const userService = {
  creteUserService,
  getSingleUserService,
  getAllUserService,
  updateSingleUserService,
  addOrderService,
};
