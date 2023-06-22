const { request, response } = require("../app")
const db = require("../models/models")

const buscarCor = async (request, response) => {
    try {
        let corRequest = request.params.id
        let cores = db
        let corEncontrada = []
        for (let cor of cores) {
            if (cor.name.toLowerCase().includes(corRequest.toLowerCase())) {
                corEncontrada.push(cor)
                console.log(".")
            }
            else { }
        }
        if (corEncontrada == undefined) throw new Error("Não Encontrada")
        console.log(corEncontrada)
        response.status(200).send(corEncontrada)
    } catch (erro) {
        response.status(404).json({ message: erro.message })
    }
}
module.exports = {
    buscarCor

}
