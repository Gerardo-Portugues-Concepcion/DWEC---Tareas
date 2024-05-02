let nodoColorSeleccionado;
let paletaColores = [];

let estadoPincelActivado = false; //TODO:desactivado por defecto

function seleccionaColor(e){
    console.log('Color seleccionado: '+e.currentTarget.classList[0]);
    nodoColorSeleccionado.classList.remove('seleccionado'); //des-selecciona el anterior color
    e.currentTarget.classList.add('seleccionado');
    nodoColorSeleccionado=e.currentTarget;
}

function actualizaInfoEstadoPincel(){
    document.getElementById('pincel').innerText=(estadoPincelActivado)?"PINCEL ACTIVADO":"PINCEL DESACTIVADO...";
}

function cambiaEstadoPincel(e){
    estadoPincelActivado=!estadoPincelActivado;
    actualizaInfoEstadoPincel();
    pintaCelda(e); //al activarlo sobre una celda también la pinta
}

function pintaCelda(e){
    console.log(`Pintando Celda ${e.currentTarget.getAttribute('posX')},${e.currentTarget.getAttribute('posY')} de color ${'background-color',window.getComputedStyle(nodoColorSeleccionado).backgroundColor}`);
    if(estadoPincelActivado){
        e.currentTarget.setAttribute('style', `background-color:${window.getComputedStyle(nodoColorSeleccionado).backgroundColor}`);
    }
}

function construyeTablero(sizeX,sizeY){
    let zonaDibujo = document.getElementById('zonadibujo');
    let tablerodibujo = document.createElement('table');
    tablerodibujo.classList.add('tablerodibujo');
    for(i=0;i<sizeY;i++){
        let fila = document.createElement('tr');
        for(j=0;j<sizeX;j++){
            let celda = document.createElement('td');
            celda.setAttribute('posX',j);
            celda.setAttribute('posY',i);
            celda.addEventListener('mouseover',pintaCelda);
            celda.addEventListener('click',cambiaEstadoPincel);
            fila.appendChild(celda);
        }
        tablerodibujo.appendChild(fila);
    }
    zonaDibujo.appendChild(tablerodibujo);
}

window.onload = () =>{   
    //Inicializa paleta;    
    colColores = paleta.getElementsByTagName('tr')[0].getElementsByTagName('td');
    for(i=0;i<colColores.length;i++){
        console.log(colColores[i]);
        //Guarda los colores
        paletaColores[colColores[i].classList[0]] = window.getComputedStyle(colColores[i]).backgroundColor;
        colColores[i].addEventListener('click',seleccionaColor);
        //marca el seleccionado inicialmente
        if(colColores[i].classList.contains('seleccionado')){
            nodoColorSeleccionado=colColores[i];
        }
    }
    //Construye el tablero de pintura
    construyeTablero(30,30);
    //actualiza información estado pincel
    actualizaInfoEstadoPincel();
}

