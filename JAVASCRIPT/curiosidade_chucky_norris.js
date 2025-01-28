var curiosidades_chuck_norris = [
  {
    titulo: "Cuidados com a higiene bucal",
    conteudo: "Chuck Norris usa arame farpado como fio dental.",
  },
  {
    titulo: "Fórmula para maratonar séries",
    conteudo:
      "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos.",
  },
  {
    titulo: "Suicida que não morre",
    conteudo: "Chuck Norris foi homem-bomba 34 vezes.",
  },
  {
    titulo: "Olhos que tudo veem",
    conteudo: "Chuck Norris já viu o homem invisível.",
  },
  {
    titulo: "Manipulando o tempo",
    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são.",
  },
  {
    titulo: "Praticando esportes radicais",
    conteudo: "Chuck Norris faz bungee jump sem corda.",
  },
  { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
  {
    titulo: "Tempero de fogo",
    conteudo: "Chuck Norris usa pólvora como tempero.",
  },
  {
    titulo: "Extinção dos dinossauros",
    conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma.",
  },
  {
    titulo: "Contando sem parar",
    conteudo: "Chuck Norris contou até o infinito. Duas vezes.",
  },
];

// Crio uma váriavel que recebe a coleção e pego o tamanho da coleção.
var tamanho_colecao = curiosidades_chuck_norris.length;

// crio uma variável que pegara os itens dentro da coleção aleatoriamente
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

// passo o valor sorteado da coleção como se fosse o index da coleção
var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

// crio uma variavel que vai pegar a coleção e sua propriedade
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);
