// Código de validaciones del formulario
let expresionNombre = /^[a-zA-ZñÑ\s]{1,20}$/;
let expresionApellidos = /^[a-zA-ZñÑ\s]{1,40}$/;

function validarNombre(){
    let nombre=document.querySelector("#nombre");
    return nombre.value.match(expresionNombre)?true:false;
}
function validarApellidos(){
    let apellidos=document.querySelector("#apellidos");
    return apellidos.value.match(expresionApellidos)?true:false;
}

// Envio de datos con XMLHttpRequest
let formulario = document.forms[0];
formulario.onsubmit = ()=>{
    console.log(validarNombre());
    console.log(validarApellidos());

    return false;}
