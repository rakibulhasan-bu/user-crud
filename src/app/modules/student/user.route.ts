import express from "express";
import { userControllers } from "./user.controller";

const route = express.Router();

route.post("/users", userControllers.createUser);

route.get("/users", userControllers.getAllUser);

export const userRoute = route;
