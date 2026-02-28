let persona = {
    nombre: "Ana",
    edad: 3.0,
    saludar: function() {
        console.log("Hola");
    }
};

console.log(persona.nombre);
console.log(persona.edad);
persona.saludar();


let persona2 = {
    saludar: function(nombre) {
        console.log("Hola " + nombre);
    }
};

persona2.saludar("Carlos");