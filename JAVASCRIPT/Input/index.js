import entradaDados from "readline-sync";

console.log("Aplicação de Juros:\n");

let valor_devido = entradaDados.question("Informe o valor devido: ");
let dias_atraso = entradaDados.question("Informe os dias em atraso: ");

const valor_juros_10 = valor_devido * (1 + 0.1);
const valor_juros_5 = valor_devido * (1 + 0.05);

if (valor_devido > 0) {
  if (dias_atraso > 0) {
    if (dias_atraso <= 15) {
      valor_devido = valor_juros_5;
      console.log("Dias em atraso:\n " + dias_atraso);
      console.log("O valor total devido é:\n" + valor_devido);
    } else if (dias_atraso > 15) {
      valor_devido = valor_juros_10;
      console.log("Dias em atraso:\n " + dias_atraso);
      console.log("O valor total devido é:\n" + valor_devido);
    }
  } else {
    console.log("Não tem dias em atraso.");
  }
} else {
  console.log("Você não está devendo nenhum valor.");
}
