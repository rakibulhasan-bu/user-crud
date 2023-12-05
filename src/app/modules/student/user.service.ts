import { TUser } from "./user.interface";
import User from "./user.model";

const creteUserService = async (userData: TUser) => {
  return await User.create(userData);
};

const getAllUserService = async () => {
  return await User.find({});
};

export const userService = { creteUserService, getAllUserService };
