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

export const userService = {
  creteUserService,
  getSingleUserService,
  getAllUserService,
};
