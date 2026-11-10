/**
function obtenerDatosDelServidor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true;

            if(exito){
                resolve("datos obtenidos correctamente") // Lo q nosotros lancemos es lo que el usuario va a recibir una vez se ejecute el código (cualquier tipo)
            } else{
                reject("Ocurrió un error al obtener los datos.")
            }
        }, 2000);
    })    
}



obtenerDatosDelServidor()
    .then((resultado) => { // Es lo q se espera que suceda
        return resultado.nombre.toUpperCase();
    })
    .then ((nombreMayuscula) => { // Podemos concatenar más de un then
        console.log(nombreMayuscula)
    })
    .catch((error) => { // el posible error
        console.log(error)
    })
    .finally(() =>{ // Continua
        console.log("Fin del programa")
    })


    // El link puede ser la dirección de nuestro servidor
fetch("https://jsonplaceholder.typicode.com/posts") // fetch es un paquete q ya viene directamente en javascript para hacer peticiones 
    .then(response =>{
        return response.json();
    })
    .then(json => {
        console.log("Lista de posts: ", json);
    })
    .catch(err=>{
        console.log(err);
    })
    .finally(() => {
        console.log("termino la petición al servodr")
    })
*/


async function obtenerPosts(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")

        console.log(response); 
    } catch(err){
        console.log(err);
    } finally{

    }
    
}

obtenerPosts();

