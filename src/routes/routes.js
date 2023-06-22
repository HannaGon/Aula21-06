const express = require("express")
const corController = requiere("./controllers/controller")

const router = express.Router()

router.get("/busca/:id", corController.buscarCor)

module.exports = router