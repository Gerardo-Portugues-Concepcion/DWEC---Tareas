const mesaxeIdadeIf = () => {
    let idade = Number(prompt("Indicar idade",99));
    let resultado = "";
    if(typeof(idade)=="number" && !isNaN(idade) && idade>=0 && idade <=100){
        console.log(`Calculando idade ${idade}.`);
        if(idade<=12){
            resultado="<p>neno</p>";
        }else if(idade<=18){
            resultado="<p>adolescente</p>";
        }else if(idade<=30){
            resultado="<p>xoven</p>";
        }else if(idade<=64){
            resultado="<p>adulto</p>";
        }else{
            resultado="<p>xubilado</p>";
        }
    }else{
        resultado = `<p>A idade introducida (${idade}) non e válida (idades válidas: 0-100).</p>`;
    }
    console.log(resultado);
    document.getElementById("resultadoIdade").innerHTML=resultado;
}
const mesaxeIdadeSwitch = () => {
    let idade = Number(prompt("Indicar idade",99));
    let resultado = "";
    if(typeof(idade)=="number" && !isNaN(idade) && idade>=0 && idade <=100){
        console.log(`Calculando idade ${idade}.`);
        switch(true){ // estructura un poco artificial para este caso.
            case (idade<=12):
                resultado="<p>neno</p>";
            break;
            case(idade>12 && idade<=18):
                resultado="<p>adolescente</p>";
            break;
            case(idade>18 && idade<=30):
                resultado="<p>xoven</p>";
            break;
            case(idade>30 && idade<=64):
                resultado="<p>adulto</p>";
            break;
            default:
                resultado="<p>xubilado</p>";
        }
    }else{
        resultado = `<p>A idade introducida (${idade}) non e válida (idades válidas: 0-100).</p>`;
    }
    console.log(resultado);
    document.getElementById("resultadoIdade").innerHTML=resultado;
}