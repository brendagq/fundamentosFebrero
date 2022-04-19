
/*
//Funciones anonimas / funciones expresadas

const funcionAnonima = function( a, b ){
    return a + b
}

//Arrow function / funciones flecha

const funcionFlecha = ( a, b ) => {
    return a + b 
} 

const saludar = nombre => {
    return `Hola! ${nombre}`
}

const funcionReturnImplicito = ( a, b ) => a + b
console.log( funcionReturnImplicito( 5, 10 ))
*/
/*
const boton = document.getElementsByTagName( "button" )[0]
console.log( boton )

//getElementsByClassName

const boton2 = document.getElementsByClassName("button")
console.log( boton2 )

const boton3 = document.getElementById("button")
console.log( boton3 )
*/

//querySelector

//querySelectorAll
/*
const divBoton = document.querySelector( "div.button" )
console.log( divBoton )

const divBoton2 = document.querySelectorAll( "div.button" )
console.log( divBoton2 )
*/

//const boton = document.getElementsByTagName( "button" )[0]

// elemento.addEventListener( tipo, funcionAEjecutar )

//Callback
/*

function funcionAEjecutar(){
    instrucciones
}

elemento.addEventListener( tipo, funcionAEjecutar )

//Funcion de orden superior
->Reciben funciones como parametros (Callback)
->Devuelven funciones como valor de retorno (Closure)


elemento.addEventListener( tipo, function(){
    intrucciones
})

elemento.addEventListener( tipo, () =>{
    instrucciones
})
*/
/*
boton.addEventListener( "click", () => {
    localStorage.setItem( "variable", "Informacion" )
    localStorage.setItem( "name", "Brenda" )
})

*/

const carrito = []

const lista = document.getElementById("lista-productos")

const agregarProducto = ( producto ) => {
    carrito.push( producto )
    console.log( carrito )
    localStorage.setItem( "carrito", JSON.stringify( carrito ) )
}

lista.addEventListener( "click", event => {
    let element = event.target

    if( element.matches( "button" ) ){
        agregarProducto( element.textContent )
    }
})
/*
let obj = { name: "bRENDA", age: 27 }
localStorage.setItem( "objeto", JSON.stringify( obj ) )
*/

