document.getElementById("tituloIndex");

let elemento = document.getElementById("tituloIndex");

console.log(elemento);
console.log(elemento.textContent);

elemento.textContent = "Buenas Noches";

/* ESTILOS */

elemento.style.color = "blue";
elemento.style.fontSize = "120px";

/** EVENT LISTENER */

elemento.addEventListener("click", function(){
    console.log("Click detectado");
});

