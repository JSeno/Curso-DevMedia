let cursosIdiomas = [
  { id: 1, nome: "Inglês", preco: 2500, carga_horaria: 160 },
  { id: 2, nome: "Espanhol", preco: 1500, carga_horaria: 110 },
  { id: 3, nome: "Francês", preco: 3600, carga_horaria: 200 },
  { id: 4, nome: "Chinês", preco: 5500, carga_horaria: 400 },
  { id: 5, nome: "Alemão", preco: 3800, carga_horaria: 230 },
];

for (curso of cursosIdiomas) {
  let nomeCurso = curso.nome;
  let precoCurso = curso.preco;
  let cargaCurso = curso.carga_horaria;

  let precoHora = precoCurso / cargaCurso;

  console.log("Nome do curso: " + nomeCurso);
  console.log("Carga horária do curso: " + cargaCurso + "horas");
  console.log("Preço do curso: " + precoCurso);

  if (precoHora >= 15) {
    console.log("Hora/aula superior ou igual a R$15,00");
  } else {
    console.log("Hora/aula inferior a R$15,00");
  }

  console.log("\n");
}
