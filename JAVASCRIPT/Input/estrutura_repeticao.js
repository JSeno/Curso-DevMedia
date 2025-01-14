import rlsync from "readline-sync";

let valor_do_produto = rlsync.question("Digite o valor do produto: ");

for (let contador = 1; contador <= 5; contador++) {
  let valor_da_parcela = valor_do_produto / contador;
  console.log(
    "Nº de parcelas: " +
      contador +
      " - valor da parcela: R$" +
      valor_da_parcela.toFixed(2)
  );
}
