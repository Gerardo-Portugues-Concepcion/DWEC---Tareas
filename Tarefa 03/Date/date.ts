
let fechaHoy:Date = new Date();
let fechaFinCurso:Date = new Date(2024,6,25,0,0,0,0);

let resultadoFecha:String = `<p>ACTUAL: ${fechaHoy.toLocaleDateString()} ${fechaHoy.toLocaleTimeString()}</p>`;
resultadoFecha += `<p>FIN CURSO: ${fechaFinCurso.toLocaleDateString()} ${fechaFinCurso.toLocaleTimeString()}</p>`;

let diferenciaMs:number=fechaFinCurso.getTime() - fechaHoy.getTime()
let diferenciaDias:number = Math.floor(diferenciaMs/1000/60/60/24)+1;

resultadoFecha+=`<p><strong>Diferencia en días: ${diferenciaDias}</strong></p>`;


//Resultados
console.log(resultadoFecha);
let htmlResultadoFecha:HTMLDivElement|null = document.querySelector("#resultadoFecha");
if(htmlResultadoFecha){
    htmlResultadoFecha.innerHTML+=resultadoFecha;
}



const calculaAniversarios:Function = ()=>{
    let htmlControlFecha:HTMLInputElement = document.querySelector("#selectorFechaAniversario");
    if (htmlControlFecha.value!="") {
        console.log(htmlControlFecha.value);
        let fechaAniversario:Date = new Date(htmlControlFecha.value);
        console.log(fechaAniversario.toLocaleDateString());
        let resultadoAniversarios:string = "";
        for(let ano:number=new Date().getFullYear();ano<=2100;ano++){
            let fechaAnivAno:Date = new Date(ano,fechaAniversario.getMonth(),fechaAniversario.getDate());            
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
        let htmlResultadoAniversarios:HTMLDivElement = document.querySelector("#resultadoAniversarios");
        if(htmlResultadoAniversarios){
            htmlResultadoAniversarios.innerHTML=resultadoAniversarios;
        }
    }
    else {
        console.log("Es necesario seleccionar una fecha.");
        alert("Es necesario seleccionar una fecha.");
    }
}

const muestraFechaFormato:Function = ()=>{
    console.log(fechaHoy.toDateString());
    let htmlFormatoFecha:HTMLInputElement = document.querySelector("#formatoFecha");
    console.log(`Seleccionado formato ${htmlFormatoFecha.value}`);

    let htmlResultadoFormato: HTMLDivElement = document.querySelector("#resultadoFormatoFecha");
    if(htmlResultadoFormato){
        switch(htmlFormatoFecha.value){
            case "DateString":
                htmlResultadoFormato.innerHTML=fechaHoy.toDateString();
                break;
            case "ISOString":
                htmlResultadoFormato.innerHTML=fechaHoy.toISOString();
                break;
            case "LocaleDateString":
                htmlResultadoFormato.innerHTML=fechaHoy.toLocaleDateString();
                break;
            case "LocaleString":
                htmlResultadoFormato.innerHTML=fechaHoy.toLocaleString();
                break;
            case "LocaleTimeString":
                htmlResultadoFormato.innerHTML=fechaHoy.toLocaleTimeString();
                break;
            case "String":
                htmlResultadoFormato.innerHTML=fechaHoy.toString();
                break;
            case "TimeString":
                htmlResultadoFormato.innerHTML=fechaHoy.toTimeString();
                break;
            case "UTCString":
                htmlResultadoFormato.innerHTML=fechaHoy.toUTCString();
                break;
            case "JSON":
                htmlResultadoFormato.innerHTML=fechaHoy.toJSON();
                break;
            default:
                htmlResultadoFormato.innerHTML="Sin formato";
                break;
        }
    }
    
}


