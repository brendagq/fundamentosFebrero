
const globos = [
    {
        color: "Amarillo",
        tamaño: "Grande"
    },
    {
        color: "Morado",
        tamaño: "Grande"
    },
    {
        color: "Amarillo",
        tamaño: "Grande"
    },
    {
        color: "Morado",
        tamaño: "Grande"
    },
    {
        color: "Verde",
        tamaño: "Grande"
    },
    {
        color: "Azul",
        tamaño: "Grande"
    },
    {
        color: "Verde",
        tamaño: "Grande"
    },
    {
        color: "Morado",
        tamaño: "Grande"
    },
    {
        color: "Verde",
        tamaño: "Grande"
    },
    {
        color: "Morado",
        tamaño: "Grande"
    },
    {
        color: "Morado",
        tamaño: "Grande"
    },
]

//Extraer cada uno de los elementos
//Evaluar a parrtir del color
//Clasificar a partir de la evaluacion 

let contadorGlobos = { }

for( let i = 0; i < globos.length; i++ ){
    let colorActual = globos[i].color

    //Determinar si el color que me acaba de salir ya existe en el contador
    
    if( contadorGlobos[ colorActual ] !== undefined ){
        //contadorGlobos[ colorActual ] !== undefined
        //Ya existe informacion sobre colorActual en el contador
        //Actualizar la propiedad que corresponda a colorActual

        contadorGlobos[ colorActual ]++
        // contadorGlobos[ colorActual ] += 1
        // contadorGlobos[ colorActual ] = contadorGlobos[ colorActual ] + 1

    }else{
        //contadorGlobos[ colorActual ] = undefined
        //Todavia no existe ese color en el contador
        //Crear la propiedad que corresponde a ese color, y darle un valor inicial
        
        contadorGlobos[ colorActual ] = 1
    }
}

console.log( contadorGlobos )

let numeroMaximo = 0
let colorMasRepetido = null

/*
    for( let propiedad in objeto ){
        //instrucciones
    }
*/

for( let color in contadorGlobos ){
    if( numeroMaximo < contadorGlobos[ color ] ){
        numeroMaximo = contadorGlobos[ color ]
        colorMasRepetido = color
    }
}

console.log( `El color mas repetido fue ${ colorMasRepetido } con ${ numeroMaximo } globos` )