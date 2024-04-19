"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const mysql = mysql2_1.default;
const dbConnect = () => {
    const connection = mysql2_1.default.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: process.env.DB_PASS_SECRET,
        database: 'university'
    });
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to DB');
            console.log(err);
            return;
        }
        console.log('Connected to DB');
    });
};
exports.default = dbConnect;
