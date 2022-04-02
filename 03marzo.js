
//OPERADORES DE COMPARACIÓN
// == igualdad, > mayor que, < menor que

//igualdad simple == 
let a = 10
let b = 5
/*
let sonIguales = a == b // 10 == 5
console.log( sonIguales )

console.log( 10 == 10 )
console.log( 10 == "10" )


console.log( "BRENDA" == "brenda" )
console.log( "brenda" == "brenda" )
console.log( true == false )
console.log( null == undefined )
console.log( null == null )

//igualdad estricta ===

console.log( 10 === "10" ) 
console.log( null === undefined )
*/


//mayor que >
// a > b --> a es mayor que b

/*
console.log( a > b ) // 10 > 5

console.log( "200" > 100 )

console.log( "PALABRA" > "otra palabra" )


//MENOR QUE <

console.log( a < b ) // 10 < 5
console.log( -100 < 5 )

console.log( "90" < 100 )
console.log( "GATO" < "gato" )
console.log( "dos" < "cero" )

console.log( "a" < "A" )
*/
//Las mayusculas tienen un valor menor


//diferencia, mayor o igual, menor o igual

// != !==
// en que casos devuelve true?
// cuando la relacion que se cumple es la de mayor o la de menor que

/*
console.log( 10 != 5 ) // 10 > 5, 10 diferente de 5
console.log( "10" != 10 )   // "10" == 10 --> true, son iguales, 
                            //NO son diferentes, la diferencia arroja false

console.log( "JHAIR" != "jhair")
console.log( undefined != null ) //los considera iguales
*/

// diferencia estricta
/*
console.log( "10" !== 10 )  // "10" === 10 --> false, NO son iguales
                            // SON diferenetes, la diferencia estricta arroja true

console.log( "LINA" !== "lina" )

console.log( undefined !== null )
*/
// mayor o igual >= 

//console.log( 10 >= 5 )
//console.log( 10 >= 10 ) 

//menor que <=
/*
console.log( 0 <= 5 )
console.log( 5 <= 5 )
console.log( 10 <= 5 ) 
*/

//OPERADORES LÓGICOS
//Se llevan a cabo con datos booleanos y devuelven un booleano


//negacion !
// !dato

//let valorDeVerdad = false

//console.log( !valorDeVerdad )

/*
    dato    datoNegado( !dato  )
    true    false
    false   true
*/


// AND ( && )
// dato1 && dato2

/*
    dato1   dato2   dato1 && dato2
    true    true    true
    true    false   false
    false   true    false
    false   false   false

*/
/*
console.log( true && true )
console.log( true && false )
console.log( false && true )
console.log( false && false )
*/

// OR ||
// dato1 || dato2
/*
    dato1   dato2   dato1 || dato2
    true    true    true
    true    false   true
    false   true    true
    false   false   false
 */
/*
console.log( true || true )
console.log( true || false )
console.log( false || true )
console.log( false || false )
*/


//correo y contraseña

let usuarioExiste = false
let contrasenaCorrecta = true

console.log( usuarioExiste && contrasenaCorrecta ) //Si es true el usuario puede ingresar

//¿Como determinarias si un numero cualquiera se 
//encuentra dentro del intervalo [0, 10]

let numero = 2

let estaDentroDelIntervalo = ( numero >= 0 ) && ( numero <= 10 )

console.log( "El numero se encuentra dentro del intervalo: " + estaDentroDelIntervalo  )



//PROPIEDADES Y MÉTODOS
//propiedades --> caracteristicas que puedo conocer sobre el dato
//  dato.nombreDeLaPropiedad
// .length --> longitud de la cadena

let unaCadena = "Esta es una frase cualquiera cualquier modifcacion"

let longitud = unaCadena.length
console.log( longitud )

//metodos --> acciones que pueden llevarse a cabo con los datos
// dato.nombreDelMetodo()

console.log( unaCadena.includes( "gato" )  )