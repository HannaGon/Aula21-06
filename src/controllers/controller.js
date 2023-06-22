const db = require("../models/models")

const buscarCor = async(request, response) =>{
    try {
        let corRequest = request.params.id
        let cores = await db
        let corEncontrada = []
        for (let cor of cores){
            if (cor.name.toLocaleLowerCase().includes(corRequest.toLocaleLowerCase())){
                corEncontrada.push(cor)
            }
            else{}
        }
        if (corEncontrada == undefined) throw new Error("Não Encontrada")
        console.log(corEncontrada)
        response.status(200).send(corEncontrada)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}

module.exports = {
    buscarCor
}
