db.produtos.updateMany({}, {
  $rename: { descricao: "descricaoSite" },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  descricaoSite: 1,
});

// https://www.mongodb.com/docs/manual/reference/operator/update/rename/#rename-a-field