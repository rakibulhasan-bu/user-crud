"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
const zod_1 = require("zod");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        //using validation with zod
        const zodParseUser = user_validation_1.userValidationSchema.parse(user);
        const result = yield user_service_1.userService.creteUserService(zodParseUser);
        //remove password from result
        const changeResult = Object.assign(Object.assign({}, result.toObject()), { password: undefined });
        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: changeResult,
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({
                success: false,
                message: "Please give valid data!",
                error: error === null || error === void 0 ? void 0 : error.issues,
            });
        }
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userService.getSingleUserService(userId);
        if (!result) {
            res.status(400).json({
                success: false,
                message: "User not found!",
                error: {
                    code: 404,
                    description: "User not found please provide an valid user id",
                },
            });
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found please provide an valid user id",
            },
        });
    }
});
const getAllUser = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.getAllUserService();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found",
            },
        });
    }
});
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = req.body;
        const result = yield user_service_1.userService.updateSingleUserService(userId, user);
        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found please provide an valid user id",
            },
        });
    }
});
const deleteSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield user_service_1.userService.deleteUserService(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found please provide an valid user id",
            },
        });
    }
});
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const order = req.body;
        const result = yield user_service_1.userService.addOrderService(userId, order);
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found please provide an valid user id",
            },
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userService.getSingleUserService(userId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Order found unsuccessful!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: { orders: result === null || result === void 0 ? void 0 : result.orders },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found please provide an valid user id",
            },
        });
    }
});
const totalPriceOfOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userService.orderPriceSumService(Number(userId));
        res.status(200).json({
            success: true,
            message: "Total price calculated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "User not found!",
            error: {
                code: 404,
                description: "User not found please provide an valid user id",
            },
        });
    }
});
exports.userControllers = {
    createUser,
    getSingleUser,
    getAllUser,
    updateSingleUser,
    deleteSingleUser,
    addOrder,
    getAllOrder,
    totalPriceOfOrder,
};
