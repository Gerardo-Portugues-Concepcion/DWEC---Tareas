function fibonacciTS(n:number): number{    
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacciTS(n-1)+fibonacciTS(n-2);
}

function secuenciaFibonacciTS(n:number): void{
    let f:number;
    if(n<1){
        console.log (`El número (${n}) debe ser natural {1, 2, 3, 4...}`);
    }else{
        let i:number=2, n0:number=0, n1:number=1;
        console.log(`F(1) = 1`);
        if(n>1){
            do{
                f=n0+n1
                console.log(`F(${i}) = ${f}`);
                n0=n1;
                n1=f;
                i++;
            }while(i<=n)
        }
    }
}

{
    let n:number=10;
    secuenciaFibonacciTS(n);
    let f=fibonacciTS(n);
    console.log(`Fibonacci de ${n} es ${f}`);    
}
