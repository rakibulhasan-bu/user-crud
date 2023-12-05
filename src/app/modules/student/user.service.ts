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

export const userService = {
  creteUserService,
  getSingleUserService,
  getAllUserService,
  updateSingleUserService,
};
