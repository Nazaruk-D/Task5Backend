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
const newUsers_1 = require("./newUsers");
class usersController {
    fetchUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const language = req.body.language;
                const amount = req.body.amount;
                const seed = req.body.seed;
                const page = req.body.page;
                const users = (0, newUsers_1.newUsers)(language, amount, seed, page);
                return res.status(200).send({ data: users });
            }
            catch (e) {
                console.log(e);
                res.status(500).json({ message: 'Fetch users error', statusCode: 500 });
            }
        });
    }
}
module.exports = new usersController();
