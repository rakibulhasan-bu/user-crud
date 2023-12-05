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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const creteUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.create(userData);
});
const getSingleUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne({ userId });
});
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.find({}).select("username fullName age email address");
});
const updateSingleUserService = (userId, updateUser) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOneAndUpdate({ userId }, updateUser, {
        new: true,
    });
});
const deleteUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.deleteOne({ userId });
});
const addOrderService = (userId, order) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOneAndUpdate({ userId }, { $push: { orders: order } }, { new: true });
});
const orderPriceSumService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.aggregate([
        { $match: { userId } },
        {
            $unwind: "$orders",
        },
        {
            $group: {
                _id: null,
                totalPrice: {
                    $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
                },
            },
        },
        {
            $project: {
                _id: 0,
                totalPrice: 1,
            },
        },
    ]);
});
exports.userService = {
    creteUserService,
    getSingleUserService,
    getAllUserService,
    updateSingleUserService,
    deleteUserService,
    addOrderService,
    orderPriceSumService,
};
