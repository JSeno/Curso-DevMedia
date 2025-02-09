const produtos = [
  { id: 1, nome: "Açúcar", estoque: 100, valor: 2.0 },
  { id: 2, nome: "Álcool 70", estoque: 50, valor: 9.95 },
  { id: 3, nome: "Luvas descartáveis", estoque: 1000, valor: 2.5 },
];

function imprimirProduto(produto, index) {
  console.log(
    `Produto: ${produto.nome} - Quantidade: ${produto.estoque} - Preço: ${produto.valor}`
  );
  console.log(index + " - " + produto.nome);
}

produtos.forEach(imprimirProduto);

console.log(
  "-------------------------------------------------------------------"
);

const carrinho = [
  { nome: "The Legend of Zelda", qnt: 1, valor: 250 },
  { nome: "Super Mario Kart 8", qnt: 1, valor: 300 },
  { nome: "New Super Mario Bros.", qnt: 1, valor: 250 },
];

function imprimirItem(produto, index) {
  let texto = index + " - ";
  texto += produto.qnt + " UN - ";
  texto += produto.nome + " - ";
  texto += "R$ " + produto.valor + " - ";
  texto += "R$ " + produto.qnt * produto.valor;

  console.log(texto);
}

carrinho.forEach(imprimirItem);
