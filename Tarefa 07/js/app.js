// Código de validaciones del formulario
let expresionNombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,20}$/;
let expresionApellidos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,40}$/;
let expresionCorreo = /^\w+@\w+\.(com|net|es|gal|org)$/;
let expresionClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[^a-zA-ZñÑ0-9]).{8,}$/;
let expresionTelefono = /^\d{9}$/;

function validarNombre(e){
    if(e.currentTarget.value.match(expresionNombre)){
        e.currentTarget.classList.remove('error');
    }else{
        e.currentTarget.classList.add('error');
    }
}

function validarApellidos(e){
    if(e.currentTarget.value.match(expresionApellidos)){
        e.currentTarget.classList.remove('error');
    }else{
        e.currentTarget.classList.add('error');
    }
}

function validarCorreo(e){
    if(e.currentTarget.value.match(expresionCorreo)){
        e.currentTarget.classList.remove('error');
    }else{
        e.currentTarget.classList.add('error');
    }
}

function validarUsuario(e){
    if(e.currentTarget.value.match(expresionNombre)){
        e.currentTarget.classList.remove('error');
    }else{
        e.currentTarget.classList.add('error');
    }
}

function validarClave(e){
    if(e.currentTarget.value.match(expresionClave)){
        e.currentTarget.classList.remove('error');
    }else{
        e.currentTarget.classList.add('error');
    }
}

function validarTelefono(e){
    if(e.currentTarget.value.match(expresionTelefono)){
        e.currentTarget.classList.remove('error');
    }else{
        e.currentTarget.classList.add('error');
    }
}


// Envio de datos con XMLHttpRequest
function envioFormulario(e){
    e.preventDefault(); //Evita acción por defecto (recarga página al enviar formulario)

    let xhrFormulario = new XMLHttpRequest();
    xhrFormulario.open('POST','http://localhost/php/registrar.php');
    xhrFormulario.addEventListener("load",respuestaFormulario)
    xhrFormulario.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //Comprobación errores básica
    let campos=formulario.getElementsByTagName('input');
    let errores=false;
    for(let i of campos){
        if(i.classList.contains('error')){
            errores=true;
            console.log('Error en campo: '+ i.id);
        }
    }

    //Sólo envía datos si no hay errores...
    if(!errores){
        //Valores formulario        
        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let correo = document.querySelector("#correo").value;
        let usuario = document.querySelector("#usuario").value;
        let clave = document.querySelector("#clave").value;
        let telefono = document.querySelector("#telefono").value;
        
        //Envío datos
        xhrFormulario.send(`nombre=${nombre}&apellidos=${apellidos}&correo=${correo}&usuario=${usuario}&clave=${clave}&telefono=${telefono}`);
    }
    
    return false; //Evita acción predeterminada formulario (evito recargar página) por si no tuviese e.preventDefault() al inicio...;
}

function respuestaFormulario(e){
    console.log(e.currentTarget.responseText);
    document.getElementById('info-respuesta').style.display='block';
    document.getElementById('respuesta-servidor').innerHTML=e.currentTarget.responseText;
}

let formulario = document.forms[0];
formulario.onsubmit = envioFormulario;

document.querySelector("#nombre").addEventListener('change',validarNombre);
document.querySelector("#apellidos").addEventListener('change',validarApellidos);
document.querySelector("#correo").addEventListener('change',validarCorreo);
document.querySelector("#usuario").addEventListener('change',validarUsuario);
document.querySelector("#clave").addEventListener('change',validarClave);
document.querySelector("#telefono").addEventListener('change',validarTelefono);
