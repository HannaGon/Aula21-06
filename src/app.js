const express = require("express")
const corRouter = requiere("./router")

const app = express()
app.use("/root", testRouter)

app.use(express.json())

app.use("/base", corRouter)

module.exports = app