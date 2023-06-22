const express = require("express")
const controller = require("../controllers/controller")

const router = express.Router()

router.get("/busca/:id", controller.buscarCor)

module.exports = router