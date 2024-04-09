//Haz tú validación en javascript acá
var nombre= document.getElementById(nombreUsuario).value;
var email= document.getElementById(mailUsuario).value;
var asunto= document.getElementById(asunto).value;
var mensaje= document.getelementById(mensagem).value;
const sintaxMail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const caracteresPermitidos= /^[A-Za-z0-9\s]+$/;
