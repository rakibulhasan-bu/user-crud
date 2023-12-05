"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./modules/student/user.route");
const app = (0, express_1.default)();
//using parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use("/api", user_route_1.userRoute);
app.get("/", (_req, res) => {
    res.send(`User CRUD server is working perfectly`);
});
// unknown route handling
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: `Route ${req.originalUrl} cannot found`,
        error: {
            code: 404,
            description: "Please provide an valid Route",
        },
    });
});
exports.default = app;
