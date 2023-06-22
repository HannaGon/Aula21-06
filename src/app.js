const express = require("express")
const corRouter = require("./routes/routes")

const app = express()

app.use(express.json())

app.use("/base", corRouter)

module.exports = app
