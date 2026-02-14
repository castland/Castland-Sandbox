// CONDICIONALES

let x = 10;
if (x > 0) {
  console.log("Positivo");
} else if (x < 0) {
  console.log("Negativo");
} else {
  console.log("Cero");
}

// SWITCH

let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

// Operador ternario
let signo = x > 0 ? "Positivo" : "No positivo";
console.log(signo);

// BUCLES

// for clásico
for (let i = 0; i < 5; i++) console.log(i);

// while
let i = 0;
while (i < 5) { console.log(i); i++; }

// do-while
let j = 0;
do { console.log(j); j++; } while (j < 5);

// for...of (arrays)
const arr = [1,2,3];
for (const n of arr) console.log(n);

// for...in (propiedades de objetos)
const obj = {a:1, b:2};
for (const key in obj) console.log(key, obj[key]);

// BREAK Y CONTINUE

for (const n of [1,2,3,4]) {
  if (n === 2) continue; // salta el 2
  if (n === 4) break;    // sale cuando llega al 4
  console.log(n);        // imprime 1 y 3
}

// RETURN

function esPar(n) {
  if (n % 2 === 0) return true;
  return false;
}
console.log(esPar(4)); // true

// ------------------------------------------------------------------

// ERRORES Y BUENA PRACTICA:

// CONTROL

// BUENA PRACTICA

// Evita comparaciones innecesarias
function esPar(n) {
  return n % 2 === 0; // ✅ Directo
  // return n % 2 === 0 ? true : false; // ❌ Redundante
}

// Usa === en lugar de ==
if (x === 5) // ✅ Estricto
if (x == 5)  // ❌ Conversión implícita

// Return temprano para evitar anidación
function validar(user) {
  if (!user) return false; // ✅ Guard clause
  if (!user.email) return false;
  return true;
}

// Operador ternario solo para casos simples
let mensaje = edad >= 18 ? "Mayor" : "Menor"; // ✅
let x = a ? b ? c : d : e ? f : g; // ❌ Muy complejo


// ERRORES:

// Olvidar break en switch
switch (dia) {
  case 1:
    console.log("Lunes");
    // ❌ Sin break, ejecuta el siguiente caso también
  case 2:
    console.log("Martes");
    break;
}

// Asignación en lugar de comparación
if (x = 5) // ❌ Asigna 5 a x (siempre true)
if (x === 5) // ✅ Compara

// else innecesario después de return
function check(n) {
  if (n > 0) {
    return "positivo";
  } else { // ❌ else innecesario
    return "negativo";
  }
}

// ----------------------------------------------------------

// BUCLES

// BUENA PRACTICA:

// Usa for...of para arrays
for (let item of array) // ✅ Más legible
for (let i = 0; i < array.length; i++) // ✅ Si necesitas índice

// Evita modificar el array mientras lo recorres
for (let i = array.length - 1; i >= 0; i--) { // ✅ Recorre al revés
  if (condicion) array.splice(i, 1);
}

// Cachea la longitud si no cambia
let len = array.length;
for (let i = 0; i < len; i++) // ✅ Más eficiente

// Usa métodos de array cuando sea apropiado
array.forEach(item => console.log(item)); // ✅ Más funcional
array.map(x => x * 2); // ✅ Para transformar
array.filter(x => x > 0); // ✅ Para filtrar


// ERRORES:

// Bucle infinito
while (true) { // ❌ Sin condición de salida
  console.log("infinito");
}

// Modificar el contador dentro del bucle
for (let i = 0; i < 10; i++) {
  i++; // ❌ Se incrementa dos veces
}

// Usar for...in en arrays
let arr = [1, 2, 3];
for (let i in arr) // ❌ Devuelve strings, no números
for (let item of arr) // ✅ Correcto para arrays

// Olvidar incrementar en while
let i = 0;
while (i < 10) {
  console.log(i);
  // ❌ Olvidaste i++, bucle infinito
}

// -------------------------------------------------------

// CONTROL FLUJO:

// BUENA PRACTICA

// break para salir temprano
for (let i = 0; i < 1000; i++) {
  if (encontrado) break; // ✅ Evita iteraciones innecesarias
}

// continue para skip lógico
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // ✅ Salta pares
  console.log(i); // Solo impares
}

// return para guard clauses
function dividir(a, b) {
  if (b === 0) return null; // ✅ Validación temprana
  return a / b;
}


// ERRORES:

// break/continue fuera de bucles
if (condicion) {
  break; // ❌ SyntaxError
}

// return fuera de función
let x = 10;
return x; // ❌ SyntaxError

// Usar break cuando querías continue
for (let i = 0; i < 5; i++) {
  if (i === 2) break; // ❌ Sale del bucle (0, 1)
  // Querías: continue (0, 1, 3, 4)
}

// Código después de return (nunca se ejecuta)
function test() {
  return true;
  console.log("Nunca se ejecuta"); // ❌ Dead code
}
