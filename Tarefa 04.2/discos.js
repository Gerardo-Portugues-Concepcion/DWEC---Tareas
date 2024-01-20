
const TIPOSMUSICA = ['Música clásica','Jazz','Blues','Góspel','Soul','Pop','Rock and Roll','Country','Disco','Techno','Reggae','Salsa','Flamenco','Ranchera','Hip hop/Rap','Reggaetón','Metal','Funk','Bossa Nova','Música melódica']

class Disco{    
    nombre="";
    grupo="";
    ano="";
    tipo="";
    prestado="";
    
    static discosTodos = new Array();

    constructor(nombre='', grupo='', ano='',tipo='',prestado=false){   
        if(TIPOSMUSICA.includes(tipo) && typeof(prestado)=='boolean'){
            this.nombre=nombre;
            this.grupo=grupo;
            this.ano=ano;
            this.tipo=tipo;
            this.prestado=prestado;    
        }else{
            throw TypeError("Parametros disco no válidos.");
        }
    }

    /**
     * 
     * @param {String} nombre 
     * @param {String} grupo 
     * @param {Number} ano 
     * @param {TIPOMUSICA} tipo 
     * @param {Boolean} prestado 
     */
    setDatos(nombre=this.nombre, grupo=this.grupo, ano=this.ano,tipo=this.tipo,prestado=this.prestado){
        if(TIPOSMUSICA.includes(tipo) && typeof(prestado)=='boolean'){
            this.nombre=nombre;
            this.grupo=grupo;
            this.ano=ano;
            this.tipo=tipo;
            this.prestado=prestado;    
        }else{
            throw TypeError("Parametros disco no válidos.");
        }
    }

    /**
     * Muestra información de disco
     */
    info(){
        return `<p>${this.nombre} (${this.grupo} ,${this.ano}) - [${this.tipo}] - ${this.prestado?"prestado":"no prestado"} </p>`;
    }

    /**
     * Información de todos los discos
     */
    static mostrarTodos(){
        return Disco.discosTodos.reduce( function (discosAnteriores,discoActual) {
            return discosAnteriores + discoActual.info();
        },'');
    }

}


