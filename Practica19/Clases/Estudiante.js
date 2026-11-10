// Como es una exportación por default, no hace falta importar nada más. Directamenre:
import Persona from "./Persona.js";

export default class Estudiante extends Persona{
    constructor(){
        super();
        this.carrera = "";
    }

    estudiar(){
        return "${this.nombre} está estudiando ${this.carrera}"
    }

    #calcularPromedio(){
        return 80;
    }

    verPromedio(){
        return "Promedio ${this.calcularPromedio}";
    }
}