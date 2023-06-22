const { request, response } = require("../app")
const db = require("../models/models")

const buscaCor = async (request, response) => {
    try {
        let corRequest = request.params.id
        let cores = await db
        let corEncontrada = []
        for (let cor of cores) {
            if (cor.name.toLocaleLowerCase().includes(corRequest)) {
                corEncontrada.push(cor)
                console.log(".")
            } else { }
        }
        if (corEncontrada == undefined) throw new Error("Cor não encontrada")
        console.log(corEncontrada)
        response.status(200).send(corEncontrada)
    } catch (error) {
        response.status(404).json({ message: error })
    }
}
module.exports = {
    buscaCor
}
