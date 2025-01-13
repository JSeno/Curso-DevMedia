import entradaDados from "readline-sync";

console.log("Aplicação de Juros:");

let valor_devido = entradaDados.question("Informe o valor devido: ");
let dias_atraso = entradaDados.question("Informe os dias em atraso: ");

const valor_juros_10 = valor_devido * (1 + 0.1);
const valor_juros_5 = valor_devido * (1 + 0.05);
// Valor > 0
console.log(valor_juros_10);
