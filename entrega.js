const validarClave = (clave) =>{
    if (clave.length < 5){
        return true
    } 
    else{
        return false
    }
}

alert("Bienvenido a nuestra botanica online")
const USUARIO = prompt("Ingrese su Usuario")
let clave = prompt("Ingrese una contraseña con al menos 5 caracteres")

while (validarClave(clave)){
    clave = prompt("Error la contraseña ingresada no cumple con la cantidad de caracteres requeridos. Por favor ingrese una contraseña nueva")
}

alert("Bienvenido " + USUARIO  +  " ahora vamos a realizarte una pequeña encuesta para elegir la planta que mejor se adapte a vos");

const LUZ = prompt("¿Su casa cuenta con al menos 4 horas de sol directo?")
const TIEMPO = prompt("¿A la semana cuantas horas puede dedicarle al cuidado de sus plantas?")
const COLOR = prompt("Seleccione su color favorito")

alert("Gracias " + USUARIO + " por responder esta leve encuesta, a continuación te ofrecemos estas opciones:" )

