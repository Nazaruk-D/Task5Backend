"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const usersRouter = require('./usersRouter');
const PORT = process.env.PORT || 7542;
const corsOptions = {
    origin: (origin, callback) => {
        console.log("origin: ", origin);
        callback(null, true);
    },
    credentials: true,
    optionSuccessStatus: 200
};
const jsonBodyMiddleWare = express_1.default.json();
app.use(jsonBodyMiddleWare);
app.use(cors(corsOptions));
app.use('/users', usersRouter);
app.get("/", (req, res) => {
    res.json({ message: "hi from Express App" });
    return console.log('Connection closed');
});
app.listen(PORT, () => {
    console.log(`I started listening port: ${PORT}`);
});
