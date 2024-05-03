// 1) Mensagem de 'Olá Mundo'
document.getElementById("mensagem").innerText = "Olá Mundo";

// 2) Saída da soma de 2 inteiros
function soma() {
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var resultado = numero1 + numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

// 3) Alterar a propriedade de um elemento por id
document.getElementById("mensagem").style.color = "red";

// 4) Alterar a propriedade de um elemento por name
var elementosPorName = document.getElementsByName("elementoPorName");
for (var i = 0; i < elementosPorName.length; i++) {
  elementosPorName[i].style.fontWeight = "bold";
}

// 5) Alterar a propriedade de um elemento por class
var elementosPorClass = document.getElementsByClassName("elementoPorClass");
for (var i = 0; i < elementosPorClass.length; i++) {
  elementosPorClass[i].style.backgroundColor = "yellow";
}
