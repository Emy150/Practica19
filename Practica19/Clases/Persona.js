export default class Persona{
    constructor(nombre = "", edad = 0){
        // Las variables se declaran dentro del constructor
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.generarId();
    }
 
    // Dentro de las clases no ocupamos la palabra function
    #generarId(){
        return Math.floor(Math.random()*1000);
    } // el # funciona para hacer la función privada. Así si hacemos una instancia de esta clase en algun otro lugar, ya no será capoaz de utilizar este método fuerta de aquí

    saludar(){ // funcion saludar, no recibe parametros sino q se manda a llamar la variable dentro de la funcion
        return "Hola soy ${this.nombre}"
    } // este metodo si es publico
}