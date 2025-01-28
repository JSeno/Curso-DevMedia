var frases_do_dia = [
  "Por que o Java estava triste? Porque perdeu sua classe.",
  "Um loop entrou em um bar e pediu uma bebida... e outra... e outra... e outra...",
  "Eu ia contar uma piada sobre SQL, mas não consegui encontrar uma tabela adequada.",
  "Como os programadores preferem se exercitar? Fazendo loops de flexões.",
  "Você sabia que os bytes vão à academia? Eles querem ficar em forma hexadecimal.",
  "O que o Python disse para o Java? 'Pare de ser tão compilado!'",
  "Por que o programador nunca tem troco? Porque trabalha com números de ponto flutuante.",
  "O que o HTML disse para o CSS? 'Pare de se estilizar tanto!'",
  "Por que o desenvolvedor terminou com sua namorada? Ela tinha muitos 'bugs' emocionais.",
  "Não confie em átomos... nem em programadores, eles fazem tudo com strings.",
  "Qual é o lugar favorito de um programador? O array!",
  "Como se chama um código que funciona na primeira tentativa? Mentira.",
  "Programadores também amam... mas preferem declarar variáveis primeiro.",
  "O que um servidor disse para o outro? 'Calma, estou sobrecarregado!'",
  "O que o JavaScript pediu no restaurante? Algo 'async' e 'await'.",
  "Um bug encontrou outro no código e disse: 'Isso aqui vai dar loop!'",
  "Por que o programador levou uma escada para o escritório? Para alcançar um novo nível!",
  "Qual é o tipo de música preferido de um programador? Algo bem 'sintático'.",
  "Por que os programadores gostam de café? Porque ele é um depurador natural.",
  "No relacionamento entre classes, a herança é o maior problema.",
  "Por que o C não foi ao restaurante? Porque ele viu o 'pointer' e ficou com medo.",
  "O que um arquivo disse para o outro? 'Você está compactado ou é impressão minha?'",
  "Como os programadores se despedem? 'Semicolon...'",
  "Meu editor de texto favorito é o silêncio... ele nunca reclama!",
  "Por que o código se sentia inseguro? Estava cheio de vulnerabilidades.",
  "Eu tentei resolver meus problemas como programador: debuguei minha vida. Não funcionou.",
  "Como um programador se sente em uma montanha-russa? Dentro de um loop infinito de emoções.",
  "Por que a string ficou presa? Porque não sabia como dar um split!",
  "Como os programadores pedem comida? Eles fazem uma requisição GET!",
  "Um programador nunca está sozinho... ele sempre tem arrays de amigos.",
];

var data_atual = new Date();
var numero_escolhido = data_atual.getDate();

console.log("Número sorteado: " + numero_escolhido);
numero_escolhido--;

var frases_do_dia = frases_do_dia[numero_escolhido];

console.log("Hoje a frase do dia é:\n");
console.log(frases_do_dia);
