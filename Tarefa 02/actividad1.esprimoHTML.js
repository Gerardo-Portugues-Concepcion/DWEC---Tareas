const esPrimoHtml = () => {
    this.event.preventDefault();
    let numero = Number(document.getElementById("numeroPrimo").value);
    let encontradoDivisor=false;
    let i=2;
    while(!encontradoDivisor && i<numero){
        if((numero%i)==0){
            encontradoDivisor=true;
            console.log(`${i} es divisor de ${numero}.`);
        }
        i++;
    }
    let resultado = encontradoDivisor?`<p>El numero ${numero} no es primo</p>`:`<p>El numero ${numero} es primo.</p>`;
    let divResultado = document.getElementById(`resultadoNumeroPrimo`);
    divResultado.innerHTML=resultado;
}