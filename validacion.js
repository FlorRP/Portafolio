//Haz tú validación en javascript acá
let maximoCaracteres = 50;
const sintaxMail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const caracteresPermitidos= /^[A-Za-z0-9\s]+$/;

function validarNombre(){
    let nombre = document.getElementById('nombreUsuario').value;
    if (nombre.length>maximoCaracteres){
        alert ('Ha alcanzado el máximo de caracteres permitidos');
        return false;
    }if (!caracteresPermitidos.test(`${nombre}`)){
            alert ('No se permiten caracteres especiales');
            return false;
        } else{
            return true;
        }
}

function validarEmail(){
    let email= document.getElementById('mailUsuario').value;
    if (!sintaxMail.test(email)){
        return true;
    } else{
        alert ('Asegurese de haber escrito el e-mail correctamente');
        return false;
    }
}

function validarAsunto(){
    let asunto = document.getElementById('asunto').value;
    if (asunto.length>maximoCaracteres){
        alert ('Ha alcanzado el máximo de caracteres permitidos');
        return false;
    } if (!caracteresPermitidos.test(`${nombre}`)){
        alert ('No se permiten caracteres especiales');
        return false;
    } else{
        return true;
    }
        
}

function validarMensaje(){
    let mensaje = document.getelementById('mensagem').value;
    let maximoCaracteres2 = 300;
    if (mensaje.length>maximoCaracteres2){
        alert ('Ha alcanzado el máximo de caracteres permitidos');
        return false;} else{
            return true;
        }
}

function validarFormulario(){
    return function validarNombre() && function validarEmail() && function validarAsunto() && function validarMensaje();
}