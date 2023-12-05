"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const route = express_1.default.Router();
route.post("/users", user_controller_1.userControllers.createUser);
route.get("/users/:userId", user_controller_1.userControllers.getSingleUser);
route.get("/users", user_controller_1.userControllers.getAllUser);
route.put("/users/:userId", user_controller_1.userControllers.updateSingleUser);
route.delete("/users/:userId", user_controller_1.userControllers.deleteSingleUser);
route.put("/users/:userId/orders", user_controller_1.userControllers.addOrder);
route.get("/users/:userId/orders", user_controller_1.userControllers.getAllOrder);
route.get("/users/:userId/orders/total-price", user_controller_1.userControllers.totalPriceOfOrder);
exports.userRoute = route;
