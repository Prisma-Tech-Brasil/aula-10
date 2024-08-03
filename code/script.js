const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

formulario.onsubmit = (event) => {
  event.preventDefault();

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);

  if (isNaN(altura) || altura <= 0) {
    resultadoTexto.textContent = "Por favor, insira uma altura válida.";
  } else if (isNaN(peso) || peso <= 0) {
    resultadoTexto.textContent = "Por favor, insira um peso válido.";
  } else {
    const imc = calculoImc(altura, peso);
    let classificacao;

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = "Obesidade Grau II";
    } else {
      classificacao = "Obesidade Grau III";
    }

    resultadoTexto.textContent = `
      Seu IMC é ${imc.toFixed(2)} (${classificacao}).
    `;
  }
};