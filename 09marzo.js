
//OBJETOS

/*
    let nuevoObjeto = {
        key : value,
        propiedad : valorDeLaPropiedad,
        clave: valorDeLaClave
    }

*/
//Son la abstraccion en codigo de elementos que existen, son reales.
//Me permite caracterizar al elemento de forma tan amplia comoo lo necesite

//const arregloNombres = [ "Jean Carlo", "Juan Esteban" ]
let objetoAutomovil = {
    marca : "Nissan",
    modelo : 2020,
    color : "Negro",
    caracteristicas : [ "4 puertas", "sonido estereo", "camara trasero" ],
    motor : {
        cilindraje : 1600,
        valvulas: 8, 
        turbo: true
    },
    
    //metodo. Accion que puede ser llevada a cabo por el objeto
    arrancar : function( parametro ){
        console.log( parametro )
        console.log( "El coche ya se encendio y arranco" )
    }
}

//Extraer informacion especifica de un objeto ?

// objeto.propiedad
// objeto.metodo()

console.log( objetoAutomovil.modelo )

objetoAutomovil.arrancar("Este es el valor del parametro")


console.log( objetoAutomovil.caracteristicas[0]  )
console.log( objetoAutomovil.motor.cilindraje )


let nombrePropiedad = "caracteristicas"

console.log( objetoAutomovil.nombrePropiedad ) // objetoAutomovil."marca"

//Sintaxis de extraccion con corchetes
// objeto["nombrePropiedad"]

console.log( objetoAutomovil[ nombrePropiedad ] ) // objetoAutomovil["caracteristicas"]

console.log( nombrePropiedad )


//Actualizacion de valores de una propiedad ya existente
// objeto.propiedad = nuevoValorDeLaPropiedad

console.log( objetoAutomovil.color )
objetoAutomovil.color = "Rojo"
console.log( objetoAutomovil.color )

//Crear nuevas propiedades
console.log( objetoAutomovil.verificacion )

// objeto.nuevaLaPropiedad = valorInicial

objetoAutomovil.verificacion = true

console.log( objetoAutomovil.verificacion )

console.log( objetoAutomovil )

//Eliminar
//delete objeto.propiedadAEliminar

delete objetoAutomovil.motor

console.log( objetoAutomovil )



const objetoUsario = {
    nombre : "Brenda Gonzalez", 
    edad: 27,
    esquemaDeVacunacion : true,
    hobbies: [ "Hornear", "Tocar piano", "Tener gatos" ],
    bandaFavorita: {
        nombreBanda: "Iron Maiden",
        cancionFavorita: "Flight of Icarus"   
    }
}

//nombre(string), edad(number), esquemaDeVacunacion(booleano), hobbies(arreglo) 
//bandaFavorita({ nombreBanda, cancionFavorito })

objetoUsario.nombre = "Brenda Gonzalez Quesada"
objetoUsario.mascotas = [ "Juno", "Canela", "Aurora" ]

console.log( objetoUsario )


const objeto1 = {
    color: "azul",
    forma: "cuadrado"
}

const objeto2  = {
    color: "azul",
    forma: "cuadrado"
}

console.log( objeto1 == objeto2 )
console.log( objeto1 === objeto2 )

console.log( [ 1, 2, 3 ] === [ 1, 2, 3 ] )

console.log( objeto1.forma == objeto2.forma  ) // "cuadrado" == "cuadrado"


//Añadir un hobbie

objetoUsario.hobbies.push( "Dar clases" )

console.log( objetoUsario )
