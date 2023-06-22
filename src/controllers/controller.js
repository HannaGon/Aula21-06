const buscarCor = async(request, response) => {}
try {
    let corRequest = request.params.id
    let cores = db 
    let corEncontrada = []
    for (let cor of cores) {
        if (cor.name.toLowerCase().includes(corRequest.toLowerCase())
        corEncontrada.push(cor)
    }
    else{}
}
if (corEncontrada == undefined) throw new Error ("Cor não encontrada")
console.log(corEncontrada)
response.status(200).send(corEncontrada)
catch (error) {
    response.status(404).json({message: error.message})
}
}
module.exports = {
    buscarCor
}