import { TUser } from "./user.interface";
import User from "./user.model";

const creteUserService = async (userData: TUser) => {
  return await User.create(userData);
};

export const userService = { creteUserService };
