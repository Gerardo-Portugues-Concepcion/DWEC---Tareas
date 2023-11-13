const fibonacci = (n) =>{
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

const secuenciaFibonacciHtml = () =>{
    this.event.preventDefault();
    let n=Number(document.getElementById('numeroFibonacci').value);
    let resultado = "";

    let i=2, f=0,n0=0,n1=1;
    if(n<1){
        resultado = (`<p>El número (${n}) debe ser natural {1, 2, 3, 4...}</p>`);
    }else{
        resultado += `<p>F(1) = 1</p>`;
        if(n>1){
            do{
                f=n0+n1
                resultado +=`<p>F(${i}) = ${f}</p>`;
                n0=n1;
                n1=f;
                i++;
            }while(i<=n)
        }
    }
    document.getElementById('resultadoFibonacci').innerHTML= resultado;
}
