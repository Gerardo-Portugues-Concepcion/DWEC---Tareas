function tablaMultiplicarTS(n:number): void {
    console.log(`Tabla de multiplicar del ${n}.`);
    for(let i:number = 0;i<=10;i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

tablaMultiplicarTS(9);