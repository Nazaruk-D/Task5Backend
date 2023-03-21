import express from 'express'
const cors = require('cors')
const app = express()
const usersRouter = require('./usersRouter')
const PORT = process.env.PORT || 7542;

const corsOptions = {
    origin: (origin: any, callback: any) => {
        console.log("origin: ", origin);
        callback(null, true);
    },
    credentials: true,
    optionSuccessStatus: 200
}
const jsonBodyMiddleWare = express.json()

app.use(jsonBodyMiddleWare)
app.use(cors(corsOptions));
app.use('/users', usersRouter);

app.get("/", (req, res) => {
    res.json({message: "hi from Express App"})
    return console.log('Connection closed')
})

app.listen(PORT, () => {
    console.log(`I started listening port: ${PORT}`)
})
