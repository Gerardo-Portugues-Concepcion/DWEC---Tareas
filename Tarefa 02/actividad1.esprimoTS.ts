function esPrimo(n:number):boolean{
    let divisorEncontrado:boolean = false;
    let i:number = 2;
    while(!divisorEncontrado && i<n){
        if((n%i)==0){
            divisorEncontrado=true;
            console.log(`Encontrado divisor ${i}.`);
        }
        i++;
    }
    return !divisorEncontrado;
}



let numeroPrimo:number = 997;
esPrimo(numeroPrimo)?console.log(`El número ${numeroPrimo} es primo.`):console.log(`El número ${numeroPrimo} no es primo.`);

numeroPrimo = 998;
esPrimo(numeroPrimo)?console.log(`El número ${numeroPrimo} es primo.`):console.log(`El número ${numeroPrimo} no es primo.`);