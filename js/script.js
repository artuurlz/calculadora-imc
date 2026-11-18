const botaoCalcular = document.querySelector(".calcular");

botaoCalcular.addEventListener("click", function () {
  const nomeUsuario = document.querySelector("#nome").value;
  const alturaUsuario = document.querySelector("#altura").value;
  const pesoUsuario = document.querySelector("#peso").value;

  const imcUsuario = gerarResultado(alturaUsuario, pesoUsuario).toFixed(2);

  function classificarUsuario(imc) {
    if (imc <= 18.5) {
      return `Abaixo do peso (Magreza).`;
    } else if (imc > 18.5 && imc <= 24.9) {
      return `Peso normal (Eutrófico)`;
    } else if (imc > 24.9 && imc <= 29.9) {
      return `Sobrepeso (Pré-obesidade)`;
    } else if (imc > 29.9 && imc <= 34.9) {
      return `Obesidade Grau I`;
    } else if (imc > 35.0 && imc <= 39.9) {
      return `Obesidade Grau II`;
    } else {
      return `Obesidade Grau III (Grave/Mórbida)`;
    }
  }

  document.querySelector(".resultado").innerHTML =
    `Olá ${nomeUsuario} seu IMC é de ${imcUsuario} </br>
    ${classificarUsuario(imcUsuario)}.`;
});

function gerarResultado(altura, peso) {
  return peso / ((altura / 100) * (altura / 100));
}
