import entradaDados from "readline-sync";

let tabuada = entradaDados.question("Digite a tabuada: ");

let contador = 0;

while (contador < 11) {
  let resultado = tabuada * contador;
  console.log(tabuada + " x " + contador + " = " + resultado);
  contador++;
}
