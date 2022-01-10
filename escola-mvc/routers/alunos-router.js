var express = require("express")

const router = express.Router()

//const alunosController recebe o conteudo importado
const alunosController = require("../controllers/alunos-controller")

//rota raiz, pega no arquivo alunosController a var listar_alunos
router.get("/", alunosController.listar_alunos)

router.get("/cadastroAluno", alunosController.cadastrar_alunos_get)

router.post("/cadastroAluno", alunosController.cadastrar_alunos_post)

router.get("/deletarAluno/:id", alunosController.deletar_aluno)

router.get("/editarAluno/:id", alunosController.editar_aluno_get)

router.post("/editarAluno", alunosController.editar_aluno_post)

module.exports = router


