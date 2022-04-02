/*
//Parametros opcionales

function saludarUsuario( nombre = "Fulanito" ) {
    return "Hola! " + nombre 
}

let saludoAlan = saludarUsuario( "Alan" )
console.log( saludoAlan )

console.log( saludarUsuario( "Gilmar" ) )
console.log( saludarUsuario(  ) )


//Estructuras de datos --> arreglos/arrays objetos

// ARREGLOS
// Coleccion de elementos. Los elementos tienen una 
// posicion asiganda dentro del arreglo
//  Finitos

//indices            0       1       2      longitud - 1
// let arreglo = [ dato1, dato2, dato3,... , daton ]

// Array es palabra reservada

//                      0       1      2    3           4       5
let arregloDatos = [ "Steven", 100 , true, undefined, null, ["elemento anidado", 3] ]
console.log( arregloDatos )

let elementoIndice0 = arregloDatos[0]
console.log( elementoIndice0 )

//Longitud
let longitudArreglo = arregloDatos.length //Contabiliza la cantidad de elementos del arreglo
console.log( longitudArreglo )

let informacionAnidada = arregloDatos[ longitudArreglo - 1 ][0]
console.log( informacionAnidada )

console.log( arregloDatos[4] )
*/
//   
/*                           0                   1           2
const arregloNombres = [ ["Alan", "Alejandra"], ["Brillit"], ["Diego", "Dina"], ["Horangel", "Hantder", "Harley", "Huber"], ["Zuri", "Zabdi"] ]
*/

//1. Extraer el nombre "Brillit"
//2. Extraer el primer elemento del tercer arreglo anidado
/*
let nombreBrillit = arregloNombres[1][0]
let nombreUsuario = arregloNombres[2][0]

let nuevoArreglo = []
console.log( nuevoArreglo )

*/

const arregloNombres = [ "Jean Carlo", "Juan Esteban" ]


//arreglo.push(nuevoElemento)
let retornoPush = arregloNombres.push( "Luis Miguel", "Ronald", "Sharon" )

console.log( arregloNombres )
console.log( retornoPush )

//arregloNombres = [ "Brenda", "Erik", "Georg" ]


//arreglo.pop() eliminar EL ULTIMO elemento del arreglo, va a devolver el elemento eliminado

let retornoPop = arregloNombres.pop()
console.log( arregloNombres )
console.log( retornoPop )

//arreglo.unshift( nuevoElemento )

let retornoUnshift = arregloNombres.unshift( "Alexander", "Angel" )
console.log( arregloNombres )
console.log( retornoUnshift )


//arreglo.shift()

let retornoShift = arregloNombres.shift()
console.log( arregloNombres )
console.log( retornoShift )

//Buscar un elemento 

let indiceBuscado = arregloNombres.indexOf( "Juan Esteban" )
console.log( indiceBuscado )

// arreglo.splice( indiceInicio, cuantosElementosSeranEliminados, nuevosElementos  )

//Eliminar
console.log( arregloNombres.splice( indiceBuscado, 1 ) )
console.log( arregloNombres )

//Añadir 
console.log( arregloNombres.splice( 1, 0, "Nuevos elementos", "Matias" ) )
console.log( arregloNombres )

//Eliminar y añadir 
console.log( arregloNombres.splice( 1, 3, "Samantha" ) )
console.log( arregloNombres )