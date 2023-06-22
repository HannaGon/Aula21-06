const express = require("express")
const corController = require("../controllers/controller")


const router = express.Router()

router.get("/busca/:id", corController.buscarCor)


module.exports = router
