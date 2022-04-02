
//WHILE

/*
    while( condicion ){
        //instrucciones que se van a repetir 
        //modificacion de la variable auxiliar
    }

    Primero evalua la condicion, en caso de ser cierta, ejecuta. 
*/
/*
let i = 0
while( i <= 5  ){
    console.log( i )
    i++
}
*/

//DO... WHILE

//Primero ejecuta, despues comprueba
/*
do{
    //instrucciones a ejecutar
    //modificacion de variable auxiliar
}while( condicion )
*/

/*
let j = 0

do{
    console.log( j )
    j++
}while( j <= -1 )
*/


//CONDICIONALES

//SWITCH
/*
switch( expresion ){
    case valor1:
        //Instrucciones en caso de que expresion == valor1
        break;
    case valor2:
        //Instrucciones en caso de que expresion == valor2
        break;
    default:
        //Instrucciones en caso de que la expresion no coincida con ningun caso
        break
}
*/
/*
let fruta = "Sandia"

switch( fruta ){
    case "Manzana":
        console.log( "Ensalada de manzana" );
        break;
    case "Limon":
        console.log( "Pay de limón" );
        break;
    case "Fresa":
        console.log( "Fresas con crema" );
        break;
    default :
        console.log( "No tengo una receta para esto" );
}
*/

//OPERADOR TERNARIO / OPERADOR CONDICIONAL
//Forma abreviada de hacer uso de la instruccion if else
/*
    if( condicion ){
        se ejecuta si la condicion es cierta
    }else{
        se ejecuta si la coondicion es falsa
    }
*/

//condicion ? se ejecuta si la condicion es cierta : se ejecuta si la condicion es falsa
/*
let number = -13

number % 2 === 0 ? console.log( "Es par" ) : console.log( "Es impar" )

let signoNumero = number >= 0 ? "Es positivo" : "Es negativo"
console.log( signoNumero )
*/

//TRUTHY Y FALSY

//Un valor es truthy cuando es evaluado como verdadero bajo un contexto booleano SIN SER un booleano true
/*
    true
    100, 1, cualquier numero DISTINTO de 0,
    numero negativos, -100, -1
    Infinity,
    -Infinity
    " ", "Cadena de texto", "false",
    [],
    {}
*/


//Un valor es falsy cuando es evaluado como falso bajo un contexto booleano SIN SER un booleano false
/*
    false,
    0,
    "",
    null,
    undefined, 
    NaN
*/
/*
if( " " ){
    console.log( "Se ejecuta el if" )
}else{
    console.log( "Se ejecuta el else" )
}
*/



/* --------------- HINTS PARA EJERCIOS DE STEPIK ------------------  */

//Método split()

let frase = "Me llamo Brenda y tengo 27 años"

//regex
let arregloPalabras = frase.split( " " )
//console.log( arregloPalabras )

let edad =  parseInt( arregloPalabras[ arregloPalabras.length - 2 ] )
//console.log( typeof edad, edad )


// Facil --> sort()
// Dificil --> condiciones y ciclos. --> Algoritmo, ordenamiento burbuja

/*
let arregloNombres = [ "Zabdi", "Brillit", "Horangel", "Alejandra", "Camilo" ]
console.log( arregloNombres.sort() )


let arregloNumeros = [ 9, 100, 999, 3, 245, 80 ]
console.log( arregloNumeros.sort(function compareNumbers(a, b) {
    return a - b;
}) )
*/

//Busqueda
const users = [ { name: 'Erik', age: 29, email: 'erik@academlo.com', social: [ { name: 'facebook', url: 'facebook/erik' }, { name: 'twitter', url: 'twitter/erik' } ], gender: 'Male' }, { name: 'Georg', age: 33, email: 'georg@academlo.com', social: [ { name: 'facebook', url: 'facebook/georg' }, { name: 'twitter', url: 'twitter/georg' } ], gender: 'Male' }, { name: 'Andrea', age: 42, email: 'andrea@hotmail.com', social: [ { name: 'facebook', url: 'facebook/andrea' }, { name: 'twitter', url: 'twitter/andrea' } ], gender: 'Female' }, { name: 'Oscar', age: 31, email: 'oscar@academlo.com', social: [ { name: 'facebook', url: 'facebook/oscar' }, { name: 'twitter', url: 'twiter/oscar' } ], gender: 'Male' }, { name: 'Daniela', age: 22, email: 'andrea@uaq.mx', social: [ { name: 'facebook', url: 'facebook/andrea' }, { name: 'twitter', url: 'twitter/andrea' } ], gender: 'Female' }, ]

function findUser( arregloUsuarios, nombre ){
    for( let i = 0; i < arregloUsuarios.length; i++ ){
        let user = arregloUsuarios[i]
        if( user.name === nombre ){
            return user
        }
    }
}

console.log( findUser( users, "Andrea" ) )