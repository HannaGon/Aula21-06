const db = require("../models/models")

const buscarCor = (request, response) => {
    try {
        let corRequest = request.params.id
        let cores = db
        let corEncontrada = []

        cores
            .filter(cor => cor.name.toLowerCase().includes(corRequest.toLowerCase()))
            .forEach(cor => corEncontrada.push(cor))

        if (corEncontrada.length === 0) {
            throw new Error("Cor não encontrada")
        }

        response.status(200).send(corEncontrada)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

module.exports = {
    buscarCor
}
