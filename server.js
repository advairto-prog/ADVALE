const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [];
let intimacoes = [];

app.get("/", (req, res) => {
  res.send(`
    <h1>ADVALE - Sistema Jurídico</h1>
    <h2>Tarefas</h2>
    <form method="POST" action="/tarefas">
      <input name="descricao" placeholder="Descrição" />
      <input name="prazo" placeholder="Prazo" />
      <button type="submit">Adicionar</button>
    </form>
    <ul>
      ${tarefas.map(t => `<li>${t.descricao} - ${t.prazo}</li>`).join("")}
    </ul>
  `);
});

app.post("/tarefas", (req, res) => {
  let body = req.body;
  tarefas.push(body);
  res.redirect("/");
});

app.listen(3000, () => console.log("Rodando..."));
