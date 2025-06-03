const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

formulario.onsubmit = (event) => {
  event.preventDefault();

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);

  // Faça condicionais verificando os dados fornecidos

  // Verificar se os dados inseridos são válidos

  // Se está abaixo do peso
  // Se está com o peso ideal
  // Se está acima do peso
};
