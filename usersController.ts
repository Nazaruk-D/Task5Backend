import {newUsers} from "./newUsers";

class usersController {
    async fetchUsers(req: any, res: any) {
        try {
            const language = req.body.language;
            const amount = req.body.amount;
            const seed = req.body.seed;
            const page = req.body.page;
            const users = newUsers(language, amount, seed, page)
            return res.status(200).send({data: users})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Fetch users error', statusCode: 500})
        }
    }
}

module.exports = new usersController()