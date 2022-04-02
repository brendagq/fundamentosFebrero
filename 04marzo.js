
let frase = "Me llamo Brenda y me gustan mucho los gatos. Los gatos son mi animal favorito, los gatos maullan"
//alt z  codigo en dos lineas


// dato.metodo( parametros )

//indexOf 
let indicePalabraEncontrada = frase.indexOf( "gatos" )
console.log( indicePalabraEncontrada )

console.log( frase.indexOf( "gatos", (indicePalabraEncontrada + 1) ) )


//lastIndexOf

let indiceUltimaPalabraEncontrada = frase.lastIndexOf( "gatos" )
console.log( indiceUltimaPalabraEncontrada )

//substring
//extraer un pedazo de una cadena de texto. 

let nuevaCadena = frase.substring( 5, 10 ) // [5, 10) --> 5, 6, 7, 8, 9
console.log( nuevaCadena )

let segundaCadena = frase.substring( 10 )
console.log( segundaCadena )

//Obtener la longitud de la última palabra de una frase cualquiera

//codigo estatico vs codigo dinamico

let fraseCualquiera = "Esta es una frase cualquiera otra palabra"

//Pseudocodigo
//Los espacios nos ayudan a diferenciar palabras entre si
//El ultimo espacio nos indica donde empieza la ultima palabra
// --> Buscar el indice del ultimo espacio --> lastIndexOf
//La ultima palabra termina donde termina la cadena de texto
//A partir de la cantidad total de caracteres podemos calcular cuantas letras tiene la ultima palabra o con ayuda de substring extraer la ultima palabra

fraseCualquiera = fraseCualquiera.trim() // quitar espacios extra

let indiceUltimoEspacio = fraseCualquiera.lastIndexOf( " " )
console.log( indiceUltimoEspacio )
                                    20      30
// "Esta es una frase cualquiera otra palabra"
let longitud1 = (fraseCualquiera.length - 1) - indiceUltimoEspacio
console.log( longitud1 )

let ultimaPalabra = fraseCualquiera.substring( indiceUltimoEspacio + 1 )
console.log( ultimaPalabra )

let longitud2 = ultimaPalabra.length
console.log( longitud2 )


//TAREA MORAL: Reemplazar la última palabra de una frase cualquiera por la palabra gato 
//nota: SIN USAR REPLACE