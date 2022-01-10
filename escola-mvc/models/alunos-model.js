var mongoose = require("mongoose")

//criando modelo do DB
const Alunos = mongoose.model("alunos", {
  nome: String,
  dataNasc: String,
  turma: String,
  nota: Number,
  matricula: Number,
  tel: Number
})

//exporta o modelo de objetos do banco de dados
module.exports = Alunos
