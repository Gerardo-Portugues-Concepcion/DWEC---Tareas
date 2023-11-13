const tablaMultiplicar = () =>{
    this.event.preventDefault();
    let n = Number(document.getElementById('numeroFibonacci').value);
    let resultado = '';
    for(i=0;i<=10;i++){
        // console.log(`${n} x ${i} = `,i*n);
        resultado += `<p>${n} x ${i} = ${i*n}<p>`
    }
    let divResultado = document.getElementById('resultadoMultiplicar');
    divResultado.innerHTML=resultado;
}
