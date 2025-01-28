let funcionarios = [
  { id: 1, nome: "Cesár", habilitado: false },
  { id: 2, nome: "Jéssica", habilitado: false },
  { id: 3, nome: "Renan", habilitado: false },
  { id: 4, nome: "Marlon", habilitado: true },
  { id: 5, nome: "Ana", habilitado: false },
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
  let funcionario = funcionarios[contador];
  console.log(funcionario.nome, funcionario.habilitado);
  console.log("");

  if (funcionario.habilitado == true) {
    console.log("Funcionário habilitado encontrado: " + funcionario.nome);
    console.log("");
    encontrouHabilitado = true;
    break;
  }

  contador++;
}
if (!encontrouHabilitado) {
  console.log("Nenhum funcionário habilitado encontrado.");
}

/*   --------------------------  */

let alunos = [
  { id: 1, nome: "Bruna", media: 8 },
  { id: 2, nome: "Laura", media: 7 },
  { id: 3, nome: "José", media: 5 },
  { id: 4, nome: "Guilherme", media: 4 },
  { id: 5, nome: "Rafael", media: 10 },
];

let contadorAlunos = 0;

while (contadorAlunos < alunos.length) {
  let aluno = alunos[contadorAlunos];
  contadorAlunos++;

  if (aluno.media < 6) {
    continue;
  }

  console.log("ID: " + aluno.id);
  console.log("Nome: " + aluno.nome);
  console.log("Média: " + aluno.media);
  console.log("\n");
}
