
let fechaHoy = new Date();
let fechaFinCurso = new Date(2024,6,25,0,0,0,0);

let resultadoFecha = `<p>ACTUAL: ${fechaHoy.toLocaleDateString()} ${fechaHoy.toLocaleTimeString()}</p>`;
resultadoFecha += `<p>FIN CURSO: ${fechaFinCurso.toLocaleDateString()} ${fechaFinCurso.toLocaleTimeString()}</p>`;

let diferenciaMs=fechaFinCurso.getTime() - fechaHoy.getTime()
let diferenciaDias = Math.floor(diferenciaMs/1000/60/60/24)+1;

resultadoFecha+=`<p><strong>Diferencia en días: ${diferenciaDias}</strong></p>`;

//Resultados
console.log(resultadoFecha);
let htmlResultadoFecha = document.getElementById("resultadoFecha");
if(htmlResultadoFecha){
    htmlResultadoFecha.innerHTML+=resultadoFecha;
}

const calculaAniversarios = ()=>{
    let htmlControlFecha = document.getElementById("selectorFechaAniversario");
    if (htmlControlFecha.value!="") {
        console.log(htmlControlFecha.value);
        let fechaAniversario = new Date(htmlControlFecha.value);
        console.log(fechaAniversario.toLocaleDateString());
        let resultadoAniversarios = "";
        for(let ano=new Date().getFullYear();ano<=2100;ano++){
            let fechaAnivAno = new Date(ano,fechaAniversario.getMonth(),fechaAniversario.getDate());            
            switch(fechaAnivAno.getDay()){
                case 6:
                    console.log(`El año ${ano} coincide en Sábado (${fechaAnivAno.toDateString()})`);
                    resultadoAniversarios+=`<li>El año ${ano} coincide en Sábado.</li>`;
                    break;
                case 0:
                    console.log(`El año ${ano} coincide en Domingo (${fechaAnivAno.toDateString()})`);
                    resultadoAniversarios+=`<li>El año ${ano} coincide en Domingo.</li>`;
                    break;
                default:
                    break;
            }
        }
        let htmlResultadoAniversarios = document.getElementById("resultadoAniversarios");
        if(htmlResultadoAniversarios){
            htmlResultadoAniversarios.innerHTML=resultadoAniversarios;
        }
    }
    else {
        alert("Es necesario seleccionar una fecha.");
    }
}

const muestraFechaFormato = ()=>{
    let htmlFormatoFecha = document.getElementById("formatoFecha");
    console.log(`Seleccionado formato ${htmlFormatoFecha.value}`);

    let htmlResultadoFormato= document.querySelector("#resultadoFormatoFecha");
    if(htmlResultadoFormato){
        switch(htmlFormatoFecha.value){
            case "FormatoA":
                htmlResultadoFormato.innerHTML=fechaHoy.toLocaleDateString();
                break;
            case "FormatoB":
                htmlResultadoFormato.innerHTML=fechaHoy.toLocaleDateString("es-es",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                break;
            case "FormatoC":
                htmlResultadoFormato.innerHTML=fechaHoy.toLocaleDateString("en-en",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                break;
            default:
                htmlResultadoFormato.innerHTML="Sin formato conocido.";
                break;
        }
    }
}

const muestraHoraFormato = ()=>{
    let htmlFormatoHora = document.getElementById("formatoHora");
    console.log(`Seleccionado formato ${htmlFormatoHora.value}`);

    let htmlResultadoFormatoHora = document.getElementById("resultadoFormatoHora");
    if(htmlResultadoFormatoHora){
        switch(htmlFormatoHora.value){
            case "FormatoA":
                htmlResultadoFormatoHora.innerHTML=fechaHoy.toLocaleTimeString();
                break;
            case "FormatoB":
                htmlResultadoFormatoHora.innerHTML=fechaHoy.toLocaleTimeString("en-US");
                break;
            default:
                htmlResultadoFormatoHora.innerHTML="Sin formato";
                break;
        }
    }
}
