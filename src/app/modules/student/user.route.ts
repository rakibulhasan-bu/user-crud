import express from "express";
import { userControllers } from "./user.controller";

const userRoute = express.Router();

userRoute.post("/users", userControllers.createUser);
