const fibonacci = (n) =>{
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

const secuenciaFibonacci = (n) =>{
    let i=2, f=0,n0=0,n1=1;
    if(n<1){
        console.log (`El número (${n}) debe ser natural {1, 2, 3, 4...}`);
    }else{
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

let n=10;
secuenciaFibonacci(n);
// let f=fibonacci(n);
// console.log(`Fibonacci de ${n} es ${f}`);
