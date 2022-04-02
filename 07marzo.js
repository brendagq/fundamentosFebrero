
//Reemplazar la última palabra de una frase cualquiera por la palabra gato 

/*
let frase = "Esta es una frase de prueba con mas palabras"
let nuevaPalabra = "gato"

let indiceUltimoEspacio = frase.lastIndexOf( " " )

// [indiceInicio, indiceFin) 
let fraseSinPalabra = frase.substring( 0, indiceUltimoEspacio + 1 ) 
console.log( fraseSinPalabra )

let nuevaFrase = fraseSinPalabra.concat( nuevaPalabra ) // fraseSinPalabra + nuevaPalabra
console.log( nuevaFrase )

let frase2 = "Esta es otra frase"
let nuevaPalabra2 = "azul"

let indiceUltimoEspacio2 = frase2.lastIndexOf( " " )
let fraseSinPalabra2 = frase2.substring( 0, indiceUltimoEspacio2 + 1)
let nuevaFrase2 = fraseSinPalabra2 + nuevaPalabra2

console.log( nuevaFrase2 )
*/

//FUNCIONES 
/*
    Bloques de codigo diseñados para realizaar procesos o tareas especificas
    
    
    //Declaracion de una funcion
    function nombreDeLaFuncion( parametros ){
        //El proceso que va a llevar a cabo la funcion
        //Instrucciones

        return valorRetorno //opcional. Ultima instruccion
    }

    nombreDeLaFuncion( argumentos ) //Ejecutar la funcion, invocar, mandar a llamar
    // parametros = argumentos
*/

//Parametro
//Datos que necesito para llevar a cabo la tarea, y que cambian en cada ejecucion 
//de la funcion

function reemplazarUltimaPalabra( frase, palabra ){
    let indiceUltimoEspacio = frase.lastIndexOf( " " ) 
    let fraseSinPalabra = frase.substring( 0, indiceUltimoEspacio + 1 )
    let nuevaFrase = fraseSinPalabra.concat( palabra ) 

    return nuevaFrase
}

let resultadoReemplazo = reemplazarUltimaPalabra( "Esta es otra frase", "chocolate" )
console.log( resultadoReemplazo )

let palabra = "perros"
console.log( reemplazarUltimaPalabra( "Me gustan los gatos", palabra) )

function sumarDosNumeros( numero1, numero2 ){
    let suma = numero1 + numero2
    console.log( suma )
    return suma
}

console.log( sumarDosNumeros( 10, 5 ) )

