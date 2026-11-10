import * as obj from "./saludo.mjs"

console.log(saludar("Emy"));
console.log("Este es el valor de PI", PI);
console.log(config.url_api);

import Estudiante from "./Estudiante.js"
let estudiante = new Estudiante();

estudiante.nombre("Emy")
estudiante.carrera("ISW")

console.log(estudiante.saludar())
console.log(estudiante.estudiar())
console.log(estudiante.verPromedio())

let persona = new Persona("Emy", 20)

console.log(persona.saludar())