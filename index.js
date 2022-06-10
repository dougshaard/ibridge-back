const express = require("express");
const db = require("./app/models");
const app = express();
const cors = require("cors");
require("./autoseed");

// app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
app.get("/all/geral", async (req, res) => {
  const allGeral = await db.Geral.findAll();
  res.send(allGeral);
});
app.get("/geral/:data", async (req, res) => {
  const getById = await db.Geral.findAll({
    where: {
      data: req.params.data,
    },
  });
  res.send(getById);
});
app.get("/geral/:data/clientes", async (req, res) => {
  const getById = await db.Cliente.findAll({
    where: {
      data: req.params.data,
    },
  });
  res.send(getById);
});

app.get("/geral/:data/clientes/:idCliente", async (req, res) => {
  const getById = await db.Cliente.findAll({
    where: {
      data: req.params.data,
      id: req.params.idCliente,
    },
  });
  res.send(getById);
});
app.listen(3000);

// De inicio vai vir na primeira data, 2022-05-20
// Depois vai precisar de uma rota para pegar todos os gerais
// Então a pessoa vai querer escolher um cliente dentro daquela data(geral)
//
