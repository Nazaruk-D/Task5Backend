"use strict";
// import {newUsers} from "./newUsers/newUsers";
//
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const {validationResult} = require('express-validator')
//
//
// class seedController {
//     async seed(req: any, res: any) {
//         try {
//             const language = req.body.language;
//             const amount = req.body.amount;
//             const seed = req.body.seed;
//             const page = req.body.page;
//             const users = newUsers(language, amount, seed, page)
//             return res.status(200).send({users: users})
//         } catch (e) {
//             console.log(e)
//             res.status(500).json({message: 'Get users error', statusCode: 400})
//         }
//     }
// }
//
// module.exports = new seedController()
