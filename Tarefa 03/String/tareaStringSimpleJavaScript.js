
let nome = prompt("Indicar nombre y apellidos.");
console.log(`La longitud del nombre es: ${nome.length}`);
console.log(`La longitud del nombre sin espacios es: ${nome.replaceAll(' ','').length}`);
console.log(`El nombre en minúsculas es: ${nome.toLowerCase()}`);
console.log(`El nombre en mayúsculas es: ${nome.toUpperCase()}`);
let nombreSeparado = nome.split(" ");
console.log(`El nombre es ${nombreSeparado[0]}, el primer apellido es ${nombreSeparado[1]} y el segundo ${nombreSeparado[2]}.`);
let usuarioProposto = nombreSeparado[0].toLowerCase() + nombreSeparado[1].charAt(0).toUpperCase() + nombreSeparado[2].charAt(0).toUpperCase();
console.log(`El usuario propuesto es: ${usuarioProposto} `);


let contrasinal = prompt("Indicar contraseña.");
(contrasinal.length>=8 && contrasinal.length<=16)?console.log('Tiene entre 8 y 16 caracteres.'):console.log('No tiene entre 8 y 16 caracteres.');
let tenMaiuscula = contrasinal.search("[A-ZÑ]+");
(tenMaiuscula>=0)?console.log(`Tiene alguna mayúscula (posición ${tenMaiuscula}).`):console.log(`No tiene mayúsculas.`);
let tenMinuscula = contrasinal.search("[a-zñ]+");
(tenMinuscula>=0)?console.log(`Tiene alguna minúscula (posición ${tenMinuscula}).`):console.log(`No tiene minúsculas.`);
let tenNumero = contrasinal.search("[0-9]+");
(tenNumero>=0)?console.log(`Tiene algún número (posición ${tenNumero}).`):console.log(`No tiene números.`);
let tenSimbolos = contrasinal.search("[^a-zA-ZñÑ0-9]");
(tenSimbolos>=0)?console.log(`Tiene algún caracter especial (posición ${tenSimbolos}).`):console.log(`No tiene caracteres especiales.`);
