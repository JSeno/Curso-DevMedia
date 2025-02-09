const produto = {
  nome: "New Super Mario Bros.",
  qnt: 1,
  valor: 250,
};

const carrinho = [
  { nome: "The Legend of Zelda", qnt: 1, valor: 250 },
  { nome: "Super Mario Kart 8", qnt: 1, valor: 300 },
];

console.log("Produto linha 12: ", produto);
console.log("Carrinho linha 13: ", carrinho);
carrinho.push(produto);
console.log("Carrinho linha 14: ", carrinho);
console.log("Produto linha 15: ", produto);

carrinho.splice(1, 1);
console.log("Carrinho linha 18: ", carrinho);

const totalElements = carrinho.length;
carrinho.splice(0, totalElements);
console.log("Carrinho linha 22: ", carrinho);
