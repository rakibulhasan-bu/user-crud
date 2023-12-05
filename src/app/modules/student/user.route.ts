import express from "express";
import { userControllers } from "./user.controller";

const route = express.Router();

route.post("/users", userControllers.createUser);

route.get("/users/:userId", userControllers.getSingleUser);

route.get("/users", userControllers.getAllUser);

route.put("/users/:userId", userControllers.updateSingleUser);

route.put("/users/:userId/orders", userControllers.addOrder);

export const userRoute = route;
