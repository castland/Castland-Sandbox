// LIZZARD
let boton = document.getElementById("btnLizzard");
let textoBoton = document.getElementById("textoBoton");
boton.addEventListener("click", function () {
  textoBoton.textContent = "Lizzard!";
});

// CAJA COLOR
let caja = document.getElementById("caja");
let botonCaja = document.getElementById("botonCaja");
let textoCajaColor = document.getElementById("textoCajaColor");
botonCaja.addEventListener("click", function () {
  if (caja.style.backgroundColor === "blue") {
    caja.style.backgroundColor = "red";
    textoCajaColor.textContent = "Soy Rojo";
  } else {
    caja.style.backgroundColor = "blue";
    textoCajaColor.textContent = "Soy Azul";
  }
});

// SALUDO
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let btnEnviar = document.getElementById("btnEnviar");
let txtSaludo = document.getElementById("txtSaludo");
btnEnviar.addEventListener("click", function () {
  if (nombre.value == "" || edad.value == "") {
    alert("Por favor completa todos los campos");
  } else {
    txtSaludo.textContent = "Hola " + nombre.value + ", tu edad es " + edad.value + "!";
  }
});

// CALCULADORA
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.getElementById("resultado");

document.getElementById("suma").addEventListener("click", function () {
  resultado.textContent = Number(valor1.value) + Number(valor2.value);
});
document.getElementById("resta").addEventListener("click", function () {
  resultado.textContent = Number(valor1.value) - Number(valor2.value);
});
document.getElementById("multiplicacion").addEventListener("click", function () {
  resultado.textContent = Number(valor1.value) * Number(valor2.value);
});
document.getElementById("division").addEventListener("click", function () {
  resultado.textContent = Number(valor1.value) / Number(valor2.value);
});

// CONTADOR
let numeroInicial = 0;
let contador = document.getElementById("contador");
document.getElementById("mas").addEventListener("click", function () {
  numeroInicial++;
  contador.textContent = numeroInicial;
});
document.getElementById("menos").addEventListener("click", function () {
  numeroInicial--;
  contador.textContent = numeroInicial;
});

// LISTA DINAMICA
let nombreLista = document.getElementById("nombreLista");
let miLista = document.getElementById("miLista");
document.getElementById("addName").addEventListener("click", function () {
  if (nombreLista.value == "") {
    alert("Por favor completa todos los campos");
  } else {
    let li = document.createElement("li");
    li.textContent = nombreLista.value;
    miLista.appendChild(li);
    nombreLista.value = "";
  }
});

// TABLA DINAMICA
let nombretabla = document.getElementById("nombretabla");
let apellidoTabla = document.getElementById("apellidoTabla");
let tabla = document.getElementById("tabla");
document.getElementById("btnAddTabla").addEventListener("click", function () {
  if (nombretabla.value == "" || apellidoTabla.value == "") {
    alert("Por favor completa todos los campos");
  } else {
    let fila = document.createElement("tr");
    let celdaNombre = document.createElement("td");
    let celdaApellido = document.createElement("td");
    celdaNombre.textContent = nombretabla.value;
    celdaApellido.textContent = apellidoTabla.value;
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    tabla.appendChild(fila);
    nombretabla.value = "";
    apellidoTabla.value = "";
  }
});
