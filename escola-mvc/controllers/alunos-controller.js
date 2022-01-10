//importar modelo do db
const alunos_db = require("../models/alunos-model")

//exporta a var listar_alunos com a funcionalidade abaixo
exports.listar_alunos = (req, res) => {
  alunos_db.find({}, (err, aluno) => {
    if (err)
      return res.status(500).send("Erro ao listar alunos")
    return res.render("views/pages/alunos", {
      dados_alunos: aluno
    })
  })
}

//rota para form cadastrar aluno
exports.cadastrar_alunos_get = (req, res) => {
  res.render("views/pages/formAlunos")
}

//rota para salvar aluno do db
exports.cadastrar_alunos_post = (req, res) => {
  let salvar = new alunos_db

  salvar.nome = req.body.nome
  salvar.dataNasc = req.body.dataNasc
  salvar.turma = req.body.turma
  salvar.nota = req.body.nota
  salvar.matricula = req.body.matricula
  salvar.tel = req.body.tel

  salvar.save((err) => {
    if (err)
      return res.status(500).send("erro ao salvar aluno no bd")
    res.redirect("/alunos")
  })
}

//deletar aluno
exports.deletar_aluno = (req, res) => {
  id = req.params.id
  alunos_db.deleteOne({
    _id: id
  }, (err) => {
    if (err)
      return res.status(500).send("erro ao deletar aluno")
    return res.redirect("/alunos")
  })
}

//editar aluno
exports.editar_aluno_get = (req, res) => {
  var id = req.params.id
  alunos_db.findById(id, (err, aluno) => {
    if (err)
      return res.status(500).send("erro ao editar get")
    res.render("views/pages/formEditarAluno", {
      dados_alunos: aluno
    })
  })
}

exports.editar_aluno_post = (req, res) => {
  var id = req.body.id
  alunos_db.findById(id, (err, salvar) => {
    if (err)
      return res.status(500).send("erro ao salvar aluno")
    salvar.nome = req.body.nome
    salvar.dataNasc = req.body.dataNasc
    salvar.turma = req.body.turma
    salvar.nota = req.body.nota
    salvar.matricula = req.body.matricula
    salvar.tel = req.body.tel

    salvar.save((err) => {
      if (err)
        return res.status(500).send("erro ao editar")
      return res.redirect("/alunos")
    })
  })
}