"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnection_1 = __importDefault(require("./dbConnection"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
(0, dbConnection_1.default)();
const app = (0, express_1.default)();
app.get('/', (_, res) => {
    res.json({ message: 'welcome' });
});
app.listen(port, () => {
    console.log(`Connected successfully at port ${port}`);
});
