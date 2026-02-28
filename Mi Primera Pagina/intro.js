let nombre = "";
let edad = 0;

function validadEdad(nombre, edad) {
    if (edad >= 18) {
        console.log(nombre + " es mayor de edad");
    } else if (edad < 18) {
        console.log(nombre + " es menor de edad");
    } else {
        console.log("Edad inválida");
    }
}


// Test the function
validadEdad("Carlos", 25);
validadEdad("Ana", 16);
