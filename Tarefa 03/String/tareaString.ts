let nome:string = prompt("Indicar nombre y apellidos.")!;

let resultadoNombre:string = "";
console.log(`La longitud del nombre es: ${nome.length}`);
resultadoNombre+=`<p>La longitud del nombre es: ${nome.length}</p>`;

console.log(`La longitud del nombre sin espacios es: ${nome.replaceAll(" ","").length}  (${nome.replaceAll(" ","")})`);
resultadoNombre+=`<p>La longitud del nombre sin espacios es: ${nome.replaceAll(" ","").length}  (${nome.replaceAll(" ","")})</p>`;

console.log(`El nombre en minúsculas es: ${nome.toLowerCase()}`);
resultadoNombre+=`</p>El nombre en minúsculas es: ${nome.toLowerCase()}</p>`;

console.log(`El nombre en mayúsculas es: ${nome.toUpperCase()}`);
resultadoNombre+=`<p>El nombre en mayúsculas es: ${nome.toUpperCase()}</p>`;

let nombreSeparado:string[] = nome.split(" ");
console.log(`El nombre es ${nombreSeparado[0]}, el primer apellido es ${nombreSeparado[1]} y el segundo ${nombreSeparado[2]}.`);
resultadoNombre+=`<p>El nombre es ${nombreSeparado[0]}, el primer apellido es ${nombreSeparado[1]} y el segundo ${nombreSeparado[2]}.</p>`;

let usuarioProposto = nombreSeparado[0].toLowerCase() + nombreSeparado[1].charAt(0).toUpperCase() + nombreSeparado[2].charAt(0).toUpperCase();
console.log(`El usuario propuesto es: ${usuarioProposto} `);
resultadoNombre+=`<p>El usuario propuesto es: ${usuarioProposto} </p>`;

let htmlResultadoNombre: HTMLDivElement | null = document.querySelector("#nome");
if(htmlResultadoNombre){
    htmlResultadoNombre.innerHTML+=resultadoNombre;
}

let contrasinal:string = prompt("Indicar contraseña.")!;
let resultadoContrasinal:string = "";

if(contrasinal.length>=8 && contrasinal.length<=16){
    console.log('Tiene entre 8 y 16 caracteres.')
    resultadoContrasinal+='<p>Tiene entre 8 y 16 caracteres.</p>';
}else{
    console.log('No tiene entre 8 y 16 caracteres.');
    resultadoContrasinal+='<p>No tiene entre 8 y 16 caracteres.</p>';
}

let tenMaiuscula:number = contrasinal.search("[A-ZÑ]+");
if(tenMaiuscula>=0){
    console.log(`Tiene alguna mayúscula (posición ${tenMaiuscula}).`)
    resultadoContrasinal+=`<p>Tiene alguna mayúscula (posición ${tenMaiuscula}).</p>`;
}else{
    console.log(`No tiene mayúsculas.`);
    resultadoContrasinal+=`<p>No tiene mayúsculas.</p>`;
}

let tenMinuscula:number = contrasinal.search("[a-zñ]+");
if(tenMinuscula>=0){
    console.log(`Tiene alguna minúscula (posición ${tenMinuscula}).`);
    resultadoContrasinal+=`<p>Tiene alguna minúscula (posición ${tenMinuscula}).</p>`;
}else{
    console.log(`No tiene minúsculas.`);
    resultadoContrasinal+=`<p>No tiene minúsculas.</p>`;
}

let tenNumero:number = contrasinal.search("[0-9]+");
if(tenNumero>=0){
    console.log(`Tiene algún número (posición ${tenNumero}).`);
    resultadoContrasinal+=`<p>Tiene algún número (posición ${tenNumero}).</p>`;
}else{
    console.log(`No tiene números.`);
    resultadoContrasinal+=`<p>No tiene números.</p>`;
}

let tenSimbolos:number = contrasinal.search("[^a-zA-ZñÑ0-9]");
if(tenSimbolos>=0){
    console.log(`Tiene algún caracter especial (posición ${tenSimbolos}).`);
    resultadoContrasinal+=`<p>Tiene algún caracter especial (posición ${tenSimbolos}).</p>`;
}else{
    console.log(`No tiene caracteres especiales.`);
    resultadoContrasinal+=`<p>No tiene caracteres especiales.</p>`;
}

let htmlResultadoContrasinal: HTMLDivElement | null = document.querySelector("#contrasinal");
if(htmlResultadoContrasinal){
    htmlResultadoContrasinal.innerHTML+=resultadoContrasinal;
}
