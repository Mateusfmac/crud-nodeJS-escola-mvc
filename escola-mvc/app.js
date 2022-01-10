const express = require("express")
const mongoose = require("mongoose")
const port = 8000
const app = express()

//define motor de visualizacao
app.set("view engine", "ejs")
app.set("views", __dirname, "/views")
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//conexao com o DB
mongoose.connect("YOUR DB!", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const router = require("./routers/alunos-router")

app.use("/alunos", router)

app.get("/", (req, res) => {
  res.send("pag Inicial")
})

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})