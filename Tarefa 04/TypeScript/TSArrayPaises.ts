
let paises: string[] = ['Mexico','Vietnam','Colombia','Germany','Costa Rica','Russian Federation','Italy','Austria','Spain','India','New Zealand','South Africa','Nigeria','South Korea','China','Singapore','Indonesia','United Kingdom','Canada','Philippines','Sweden','Chile','Pakistan','Norway','United States','Australia','Turkey'];

function mostrarNumeroElementos( paises:string[] ): number{
        console.log(paises.length);
        return paises.length;    
}

function mostrarPaises(paises:string[]): string {
    paises.forEach(element => {
        console.log(element);
    });
    return paises.join(", ");
}

function mostrarPaisesInverso(paises:string[]):string{
    let resultado:string = "";
    for(let i:number =paises.length;i--;i>=0){
        console.log(paises[i]);
        resultado+= (i>0)?paises[i]+", ": paises[i];
    }
    return resultado;
}

function anadirPaisComezo(paises:string[],pais:string): void{
    paises.unshift(pais);
}

function anadirPaisFinal(paises:string[],pais:string):void{
    paises.push(pais);
}

function eliminarPaisComezo(paises:string[]):string{
    let pais:string|undefined = paises.shift();
    console.log(`Eliminado ${pais}`);
    return (pais===undefined)?"":pais;
}

function eliminarPaisFinal(paises:string[]){
    let pais:string|undefined = paises.pop();
    console.log(`Eliminado ${pais}`);
    return (pais===undefined)?"":pais;
}

function mostrarPaisID(paises:string[],id:number):string|void{
    if(id>=0 && id<paises.length){
        console.log(`El pais con id=${id} es ${paises[id]}`);
        return paises[id];
    }else{
        console.log(`No existe pais con id ${id}`);
    }
}

function mostrarPosicionPais(paises:string[],pais:string):number{
    let posicion:number = paises.findIndex((p) =>{return (p==pais)});
    console.log(`${pais} está en la posición ${posicion}`);
    return posicion;
}

function mostraPaisesEntre(paises:string[], i1:number, i2:number){
    if(i1>=0 && i2<paises.length){
        for(let i:number=Math.min(i1,i2);i<=Math.max(i1,i2);i++){
            console.log(`Pais ${i} = ${paises[i]}`);
        }    
    }else{
        console.log(`Índices fuera de rango (válidos 0-${paises.length-1})`);
    }
}

function mostraPaisesEntreAlternativa(paises:string[], i1:number, i2:number){
    if(i1>=0 && i1<paises.length && i2>=0 && i2<paises.length){
        mostrarPaises(paises.slice(Math.min(i1,i2),Math.max(i1,i2)+1))
    }else{
        console.log(`Índices fuera de rango (válidos 0-${paises.length-1})`);
    }
}


console.log("1.- Número de elementos");
mostrarNumeroElementos(paises);
console.log("2.- Listado de paises");
mostrarPaises(paises);
console.log("3.- Listado de paises en orden inverso");
mostrarPaisesInverso(paises);
console.log("4.- Añadir pais al principio");
anadirPaisComezo(paises, "Vatican City State");
//mostrarPaises(paises);
console.log("5.- Añadir pais al final");
anadirPaisFinal(paises, "Monaco");
//mostrarPaises(paises);
console.log("6.- Eliminar pais al principio");
eliminarPaisComezo(paises);
console.log("7.- Eliminar pais al final");
eliminarPaisFinal(paises);
console.log("8.- Mostrar elemento indicado");
mostrarPaisID(paises,10);
console.log("9.- Mostrar posición de elemento");
mostrarPosicionPais(paises,"Spain");
console.log("10.- Mostrar paises entre posicions");
mostraPaisesEntre(paises,8,16);
mostraPaisesEntreAlternativa(paises,8,16);
