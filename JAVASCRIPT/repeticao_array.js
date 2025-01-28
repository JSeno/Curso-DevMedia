let nomes = ["João", "Diego", "Ana", "Luzia", "Isabela", "Carlos"];
let contador = 0;

while (contador < nomes.length) {
  console.log("Os nomes são: " + nomes[contador]);
  contador++;
}

let numeros = [31, 26, 14, 67, 55, 42, 10, 5];
let totalImpares = 0;
let totalPares = 0;
let contadorNumeros = 0;

while (contadorNumeros < numeros.length) {
  if (numeros[contadorNumeros] % 2 == 0) {
    totalPares++;
  } else {
    totalImpares++;
  }
  contadorNumeros++;
}

console.log("O total de números ímpares são: " + totalImpares);
console.log("O total de números pares são: " + totalPares);
