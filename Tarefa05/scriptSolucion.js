let errores = {}; //Objeto para gestionar varios mensajes de error.
let contadorCookies = 1; //contador inicial cookies

/**
 * Contador cookies
 */

function contadorCookiesLee (){
    let decodedCookie = decodeURIComponent(document.cookie);        
    //Comprueba si hay cookies
    if(decodedCookie!=''){
        console.log(`Cookie leida: ${decodedCookie}`);
        //Si existen cookies recupera valor
        let valor = /contador=\d/.exec(decodedCookie);
        if(valor.length==1){
            contadorCookies = parseInt(valor[0].replace('contador=','').replace(';',''));
        }
    }

    contadorCookiesMuestra(); //siempre que lee, muestra el nuevo resultado
}

function contadorCookiesActualiza (){
    contadorCookies++; //añade uno al contador.
    //Guarda contador nuevo como cookie
    let d=new Date();
    d.setTime(d.getTime()+1000*60*10) //Expira en 10 minutos
    document.cookie = `contador=${contadorCookies}; expires=${d.toUTCString()};path=/;SameSite=none;secure`;

    contadorCookiesMuestra(); //siempre que actualiza muestra el nuevo resultado
}

function contadorCookiesMuestra (){
    document.getElementById("intentos").innerHTML=`Intentos envío:${contadorCookies}`;
}

//muestra mensajes error
function muestraErrores(){
    let zonaErrores = document.getElementById('errores');
    zonaErrores.innerHTML='';
    for(var error in errores){
        zonaErrores.innerHTML += `Error en ${error}:${errores[error]}<br/>`;
    }
}

function convierteMayusculas(evento){
    evento.currentTarget.value = evento.currentTarget.value.toUpperCase();
}

function validarTexto(evento){
    let textoValidar = evento.currentTarget.value;
    //valida que el contenido sean letras y espacios. No permite simbolos ni números en nombre. Si permite guión bajo...
    let letrasYEspacios = /^[a-zA-zñÑ\s]*$/;
    if(textoValidar.match(letrasYEspacios)){
        //elimina el error
        delete errores[evento.currentTarget.getAttribute('name')];
    }else{
        //Añade el error
        errores[evento.currentTarget.getAttribute('name')] = "Permitido texto y espacios.";
        evento.currentTarget.focus();
    }
    muestraErrores();
}

function validarEdad(evento){
    //valida valores numéricos entre 0 y 105
    let edad = parseInt(evento.currentTarget.value);
    
    if(isNaN(evento.currentTarget.value) || edad<0 || edad >105){
        errores[evento.currentTarget.getAttribute('name')] ="Permitido: Números entre 0 y 105.";
        evento.currentTarget.focus();
    }else{
        if(isNaN(edad)){
            evento.currentTarget.value=0;    
        }else{
            evento.currentTarget.value =edad; //efecto redondear si se meten decimales.
        }        
        delete errores[evento.currentTarget.getAttribute('name')];
    }
    muestraErrores();
}

function validarNif(e){
    //Valida 8 números, guión y letra
    let expresionNIF = /^[\d]{8}-[a-zA-Z]$/;
    /*
    Expresión explicada:
        ^           Comienza por... (no hay nada antes)
        [\d]{8}     Exactamente 8 dígitos.
        -           Un guión
        [a-zA-Z]    Una letra (excepto Ñ). Un elemento del conjunto entre a y z minúsculas o A y Z mayúsculas.
        $           Finaliza, no hay nada después.
    */
    let textoValidar = e.currentTarget.value;
    if(textoValidar.match(expresionNIF)){
        delete errores[e.currentTarget.getAttribute('name')]
    }else{
        errores[e.currentTarget.getAttribute('name')] ="DNI formato 12345678-A.";
        e.currentTarget.focus();
    }
    muestraErrores();
}

function validarMail(e){
    mailValidar=e.currentTarget.value;
    regexMail = /^[a-zA-Z0-9]+[a-zA-Z0-9-_.]*[a-zA-Z0-9]+\@[0-9a-zA-Z]+[0-9a-zA-Z-_.]*[0-9a-zA-Z]+\.+[a-zA-Z]{1,63}$/
    /*
        Expresión regular explicada.
        ^[a-zA-Z0-9]+       Comienza por una letra o número     
        [a-zA-Z0-9-_.]*     Puede tener letras, números,guiones o puntos (no al principio ni al final)
        [a-zA-Z0-9]+       Acaba por letra o número

        \@                  Una @ literal para separar nombre y dominio
        
        [0-9a-zA-Z]+        El dominio comienza por letra o número
        [0-9a-zA-Z-_.]*     Sigue letra, números, guiones o puntos
        [0-9a-zA-Z]+        Dominio finaliza por letras o números
        
        \.+                 Un punto para separar dominio y tld
        
        [a-zA-Z]{1,63}$     Finaliza por TLD formado por entre 1 y 63 letras.

        no usado \w para controlar mejor los guiones inicio y final...
    */

    if(mailValidar.match(regexMail)){
        delete errores[e.currentTarget.getAttribute("name")];
    }else{
        errores[e.currentTarget.getAttribute("name")] = "Introducir mail válido (lo-que_sea@dominio.tld)";
        e.currentTarget.focus();
    }
    muestraErrores();




}

function validarProvincia(e){
    let iSeleccionado = e.currentTarget.selectedIndex;
    // console.log(`Seleccionado ${iSeleccionado} texto: ${e.currentTarget.options[iSeleccionado].text} Valor: ${e.currentTarget.options[iSeleccionado].value}`);
    if(iSeleccionado==0){
        errores[e.currentTarget.getAttribute("name")] = 'Necesario seleccionar una provincia.'
        e.currentTarget.focus();        
    }else{
        delete errores[e.currentTarget.getAttribute("name")];
    }
    muestraErrores();
}

function validarFecha(e){
    let fechaValidar=e.currentTarget.value;
    let expresionFecha = /^\d{2}-\d{2}-\d{4}$|^\d{2}\/\d{2}\/\d{4}$/;
    /*
    Expresión fecha explicada
        ^\d{2}      Comienza por exactamente 2 números (dd)
        -           Sigue un guión
        \d{2}       2 números (mm)
        -           Un guión
        \d{4}$      Finaliza con 4 números (aaaa)
        |           o, de modo alternativo
        ^\d{2}\/\d{2}\/\d{4}$   la misma expresión que antes pero sustituyendo guiones por barras (escapadas con \). No permite combinar guiones y barras en la misma fecha.
    */
    if(fechaValidar.match(expresionFecha)){
        delete errores[e.currentTarget.getAttribute("name")];
    }else{
        errores[e.currentTarget.getAttribute("name")] = 'Fecha en formato dd/mm/aaaa op dd-mm-aaaa.'
        e.currentTarget.focus();
    }
    muestraErrores();
}

function validarTelefono(e){
    let telefonoValidar=e.currentTarget.value;
    let expresionTelefono=/^\d{9}$/;
    /*
    Expresión teléfono:
        ^       Desde el principio (no hay nada antes)    
        \d      un dígito    
        {9}     Exactamente 9 veces
        $       Final de expresión. No hay nada después.
    */
    if (telefonoValidar.match(expresionTelefono)){
        delete errores[e.currentTarget.getAttribute("name")];
    }else{
        errores[e.currentTarget.getAttribute("name")]="El teléfono deben ser 9 dígitos.";
        e.currentTarget.focus();
    }
    muestraErrores();
}

function validarHora(e){
    let horaValidar=e.currentTarget.value;
    let expresionHora = /^\d\d:\d\d$/;    
    /*
    Expresión fecha explicada
        ^       Comienza por... (no hay nada antes)
        \d\d    dos dígitos (horas hh)
        :       dos puntos
        \d\d    dos dígitos (minutos mm)
        $       fin de la expresión (no hay nada después)
    */
    if(horaValidar.match(expresionHora)){
        delete errores[e.currentTarget.getAttribute("name")];
    }else{
        errores[e.currentTarget.getAttribute("name")] = 'Hora en formato hh:mm'
        e.currentTarget.focus();
    }
    muestraErrores();
}

function enviarFormulario(e){
    const regexConfirmarSi = /^S$|^s$]|^SI$|^si$|^Si$/;
    const regexConfirmarNo = /^N$|^n$]|^NO$|^no$|^No$/;

    let confirmacion = '';
    while(confirmacion!==null && !confirmacion.match(regexConfirmarSi) && !confirmacion.match(regexConfirmarNo) ){
        confirmacion = prompt("Seguro que quiere enviar el formulario? [S/N]","S");
    }

    if(confirmacion!==null && confirmacion.match(regexConfirmarSi)){
        contadorCookiesActualiza(); //actualiza el contador de envios
        console.log('Formulario enviado.')
    }else{
        console.log('Formulario no enviado.')
        e.preventDefault();    
    }
}

window.onload = ()=>{
    contadorCookiesLee(); //lee el contador de las cookies

    let formulario = document.forms["formulario"];
    if(formulario!=null){

        formulario.nombre.addEventListener('change',convierteMayusculas);
        formulario.nombre.addEventListener('change',validarTexto);

        formulario.apellidos.addEventListener('change',convierteMayusculas);
        formulario.apellidos.addEventListener('change',validarTexto);

        formulario.edad.addEventListener('change',validarEdad);

        formulario.nif.addEventListener('change',validarNif);

        formulario.email.addEventListener('change',validarMail);

        formulario.provincia.addEventListener('change',validarProvincia);

        formulario.fecha.addEventListener('change',validarFecha);

        formulario.telefono.addEventListener('change',validarTelefono);

        formulario.hora.addEventListener('change',validarHora);

        formulario.onsubmit = enviarFormulario;

    }
}