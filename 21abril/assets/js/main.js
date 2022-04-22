

/*

SINCRONA -> Ocurre en tiempo real
ASINCRONO -> Existe un desfase temporal

PARALELISMO -> Multiples tareas de forma simultanea

BLOQUEANTE -> Algo que frena hasta es completado

NO BLOQUEANTE -> Devuelve el contro inmediatamente sin importar el resultar  


Javascript 
Asincrono y no bloqueante. Tiene un unico hilo (Ejecuta tarea por tarea)
*/


/*
Promesa
Funcion no-bloqueante y asincrona, que puede devolver un valor ahora, en el futuro o nunca
*/

/*
const algoVaOcurrir = ( number ) =>{
    return new Promise( (resolver, rechazar) => {
        if( number < 10 ){
            resolver( "El numero es menor a 10" ) //Promesa resuelta
        }else{
            rechazar( "¡Ups! un error, es numero es muy grande" ) //Promesa rechazada
        }
    })
}


algoVaOcurrir( 15 )
.then( response => console.log( response ) )
.catch( error => console.error( error ) )

*/

const algoVaOcurrir = ( number ) => {   
 
    return new Promise( (resolver, rechazar) => {
        if( number < 10 ){
            setTimeout(() => {
                resolver( "El numero es menor a 10" ) //Promesa resuelta
            }, 5000);
        }else{
            setTimeout(() => {
                rechazar( "¡Ups! un error, es numero es muy grande" ) //Promesa rechazada
            }, 2000);
        }
    })


}

//console.log( algoVaOcurrir(5) )

/*
algoVaOcurrir( 15 )
.then( response => console.log( response ) )
.catch( error => console.error( error ) )
*/

/*

ASYNC / AWAIT

Funciones async

    Agregar palabra reservada async antes de la funcion
    async function funcionAsincrona(params) {
        
    }

    const funcionAnonimaAsincrona = async function (){

    }

    const funcionFlechaAsincrona = async () => {

    }


    await

    Hace que JS espere hasta que una promesa responda y devuelve su resultado

    async function funcionAsincrona(){
        let resultado = await promesa
    }



    try/ catch

    try{

    } catch{
        //Que ocurre si la promesa, o lo que esta dentro de try no se resuelve 
    }
*/

/*
async function funcionAsincrona(){
    setTimeout(() => {
        return "Valor de retorno"
    }, 2000);
}

console.log( funcionAsincrona )

*/

console.log( "Antes" )

async function funcionAsincrona() {
    console.log( "Inicio de la funcion asincrona" )

    try{
        let resultado = await algoVaOcurrir(15)
        console.log( resultado )
    }catch{
        console.error( "Ups! algo salio muy mal")
    }
    
    console.log( "Aqui acaba la funcion asincrona" )
}

funcionAsincrona()

console.log( "despues" )
