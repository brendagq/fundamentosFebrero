/*
let userInfo = "Brenda Gonzalez" //string
console.log( userInfo )
console.log( typeof userInfo  )

userInfo = 27 //number
console.log( userInfo )
console.log( typeof userInfo  )

userInfo = true //boolean
console.log( userInfo )


// typeof --> me permite identificar el tipo de dato primitivo al cual 
//pertenece un dato
// typeof dato

console.log( typeof userInfo  )

console.log( typeof "Hola mundo" )
console.log( typeof NaN )
console.log( typeof undefined )
console.log( typeof null )
console.log( typeof( 2+3 ) ) // typeof 5
console.log( typeof "100" )

*/

//Operadores de asignación
/*
    = operador de asignacion
    += asignacion con suma

 */

/*
let a = 5

a += 10 // a = a + 10 --> a = 5 + 10
console.log( a )

a -= 2 // a = a - 2 --> a = 15 - 2
console.log( a )

a *= 3 // a = a * 3 --> a = 13 * 3
console.log( a )

a /= 3 // a = a / 3 --> a = 39 / 3
console.log( a )

a **= 2 // a = a ** 2 --> a = 13 **2 
console.log( a )

a %= 5 // a = a % 5 --> a = 169 % 5
console.log( a )
*/

//OPERADORES ARITMETICOS

/*
let num1 = 10
let num2 = 5

let suma = num1 + num2
console.log( suma )

let resta = num2 - num1
console.log( resta )

let multiplicacion = num1 * num2
console.log( multiplicacion )

let division = num1 / num2
console.log( division )

let residuo = 10 % 3 // 10 / 3 de forma exacta, y devuelve el residuo 
console.log( residuo )

console.log( num1 % num2 ) //10 % 5
//residuo 0 implica que el primer numero es multiplo del segundo 


//numero par --> es multiplo de 2 --> numero % 2 se obtiene 0

*/


console.log( "10" + 10 ) //concatenacion

//Conversión implicita - cohersion de tipo - cohersion de datos

console.log( "palabra" - 10 ) //NaN
console.log( true + true ) // 1 + 1
console.log( true - false ) // 1 - 0
console.log( 10 - null ) // 10 - 0
console.log( "100" / 5 )


//Conversiones explicitas

let datoNoNumerico = "100"

let resultadoConversion = parseInt( datoNoNumerico )

console.log( typeof datoNoNumerico, datoNoNumerico )

console.log( typeof resultadoConversion, resultadoConversion )

let contador = 0
/*
console.log( contador )

console.log( ++contador ) // contador += 1 --> contador = contador + 1
console.log( contador ) 
*/
console.log( contador )

console.log( contador-- ) // contador -= 1 --> contador = contador - 1
console.log( contador ) 


//Operadores de comparacion
//Siempre devuelven booleanos como resultado
//Establecen una relacion de comparacion entre dos datos


//Axioma de orden 
/*
    Una y solo una de las siguientes relaciones de orden 
    se va a cumplir entre dos datos

    --> igualdad
    --> mayor que
    --> menor que 
*/
