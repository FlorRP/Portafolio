//Haz tú validación en javascript acá
const camposFormulario = document.querySelectorAll("[required]");
const sintaxMail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validacionFormulario = document.querySelector("[data-formulario]");
let maximoCaracteres = 50;

validacionFormulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const listaRespuestas={
        nombre:e.target.elements["nombre"].value,
        email:e.target.elements["email"].value,
        asunto:e.target.elements["asunto"].value,
        mensaje:e.target.elements["mensaje"].value,
    };
    if(validacionFormulario.checkValidity()){
        enviarFormulario();
        localStorage.setItem("registro", JSON.stringify(listaRespuestas))
        alert("El envio del formulario ha sido exitoso");
    }
    
})

camposFormulario.forEach((campo)=>{
    
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificarCampo(campo){
    let mensajes= "";
    campo.setCustomValidity("");
    if(campo.name == "nombre" && campo.value.length <=50 && campo.value != ""){
        validarNombre(campo);
    }
    
}

function validarNombre(campo){
    const nombre= campo.value;
    if (nombre.length > maximoCaracteres){
        campo.setCustomValidity("El nombre tiene más caracteres de los permitidos, por favor ingrese un nombre válido");
    }else{
        if (nombre == ""){
            campo.setCustomValidity("Por favor, complete con su nombre");
                
        } else{
            console.log("Nombre válido");
        }
    }
}

function validarEmail(campo){
    const email= campo.value;
    if (!sintaxMail.test(email)){
        campo.setCustomValidity("El e-mail no es válido");
    } else{
        if(email == ""){
            campo.setCustomValidity("Por favor, complete el campo de e-mail");
        }else{
            console.log ('E-mail válido');
        }
    }
}

function validarAsunto(campo){
    const asunto = campo.value;
    if (asunto.length>maximoCaracteres){
        campo.setCustomValidity ('Ha alcanzado el máximo de caracteres permitidos');
    } else{
      if (asunto == ""){
            campo.setCustomValidity ('Por favor, complete el campo de asunto');
        } else{
            console.log ('Asunto válido');
        }  
    } 
        
}

function validarMensaje(campo){
    const mensaje = campo.value;
    let maximoCaracteres = 300;
    if (mensaje.length>maximoCaracteres){
        campo.setCustomValidity ('Ha alcanzado el máximo de caracteres permitidos');
    } else{
        if(mensaje == ""){
            campo.setCustomValidity ('Por favor, complete el campo de asunto');
        } else{
            console.log ('Asunto válido');  
        }
        
    }
}