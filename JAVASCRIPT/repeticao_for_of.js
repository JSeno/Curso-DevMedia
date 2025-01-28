// let alunos = [
//   { id: 1, nome: "Alessandro", matricula: 12345 },
//   { id: 2, nome: "Clara", matricula: 14545 },
//   { id: 3, nome: "Juliana", matricula: 22345 },
//   { id: 4, nome: "Miguel", matricula: 21225 },
//   { id: 5, nome: "Priscila", matricula: 33145 },
// ];

// for (let aluno of alunos) {
//   let nome = aluno.nome;
//   let matricula = aluno.matricula;
//   console.log("Aluno: " + nome + " | " + "Matrícula: " + matricula);
// }

let produtos_array = [
  { id: 1, nome: "mouse", preco: 50 },
  { id: 2, nome: "monitor", preco: 500 },
  { id: 3, nome: "teclado", preco: 20 },
  { id: 4, nome: "gabinete", preco: 350 },
  { id: 5, nome: "impressora", preco: 150 },
];

let percentual_desconto = 10;

for (let produto of produtos_array) {
  let nome = produto.nome;
  let preco = produto.preco;

  let valor_desconto = (preco * percentual_desconto) / 100;
  let novo_preco = preco - valor_desconto;

  console.log("Novo valor do produto: " + nome + " - R$" + novo_preco + ",00");
}
