const run = async () => {
  const db = require("./app/models");
  const fetch = require("node-fetch");
  if ((await db.Geral.findAll()) != 0) return;
  const res = await fetch(new URL("https://www.ibridge.com.br/dados.json"));
  const json = await res.json();
  for (let index = 0; index < json.length; index++) {
    const element = json[index].geral;
    const createdGeral = await db.Geral.create(element);
    const clients = Object.entries(json[index].clientes);
    for (let index = 0; index < clients.length; index++) {
      const element = clients[index];
      await db.Cliente.create({
        clientName: element[0],
        geralId: createdGeral.id,
        ...element[1],
      });
    }
  }
};
module.exports = run();
