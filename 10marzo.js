
//ESTRUCTURAS DE CONTROL
//Permiten modificar el flujo (o lo definen) de ejecucion de las instrucciones de un programa

//Ciclicas / de iteracion / repetitivas

// for 

/*    
                                    contador < valorFinal
    for( let contador = valorInicial; condicionAEvaluar ; modificacionAlContador ){
        //instrucciones que se van a repetir mientras la condicion sea verdadera
    }
*/
/*
for( let i = 0; i <= 10; i++ ){
    console.log( i )
}
*/


/*
0 <= 10     0++    1
1 <= 10 
10 <= 10    10++    11
11 <= 10 finaliza el for
*/

const users = [ { name: 'Erik', age: 29, email: 'erik@academlo.com', social: [ { name: 'facebook', url: 'facebook/erik' }, { name: 'twitter', url: 'twitter/erik' } ], gender: 'Male' }, { name: 'Georg', age: 33, email: 'georg@academlo.com', social: [ { name: 'facebook', url: 'facebook/georg' }, { name: 'twitter', url: 'twitter/georg' } ], gender: 'Male' }, { name: 'Andrea', age: 42, email: 'andrea@hotmail.com', social: [ { name: 'facebook', url: 'facebook/andrea' }, { name: 'twitter', url: 'twitter/andrea' } ], gender: 'Female' }, { name: 'Oscar', age: 31, email: 'oscar@academlo.com', social: [ { name: 'facebook', url: 'facebook/oscar' }, { name: 'twitter', url: 'twiter/oscar' } ], gender: 'Male' }, { name: 'Daniela', age: 22, email: 'andrea@uaq.mx', social: [ { name: 'facebook', url: 'facebook/andrea' }, { name: 'twitter', url: 'twitter/andrea' } ], gender: 'Female' }, ]

//1. Generar un arreglo en el que estubieran todos los emails de los usuarios

/*
console.log( users.length )

let emailsArreglo = []

let email1 = users[0].email
emailsArreglo.push( users[0].email )

let email2 = users[1].email
emailsArreglo.push( email2 )

let email3 = users[2].email
emailsArreglo.push( email3 )

let email4 = users[3].email
emailsArreglo.push( email4 )

let email5 = users[4].email
emailsArreglo.push( email5 )


console.log( emailsArreglo )
*/

/*
    users.length == 5 
    i <= 4  0 1 2 3 4
    i < 5   0 1 2 3 4 
*/
/*
function extraerEmails( arregloUsers ) {
    let arregloEmails = []
    
    for( let i = 0; i < arregloUsers.length; i++ ){
        //console.log( i, arregloUsers[i].email  )
        arregloEmails.push( arregloUsers[i].email )
    }
    
    return arregloEmails 
}

console.log( extraerEmails( users ) ) 

function extraerDatos( arregloUsers, propiedad ){
    let arregloDatos = []

    for( let i = 0; i < arregloUsers.length; i++ ){
        let dato = arregloUsers[i][propiedad]

        arregloDatos.push( dato )
    }

    return arregloDatos
}
console.log( extraerDatos( users, "name" ) )

//Crea un array de nombre facebookAccounts y almacena todas las urls de las cuentas de facebook del arreglo users.
//2.Repetir el segundo paso con for 

function extraerUrls( arregloUsers ){
    let arregloUrls = []

    for( let i = 0; i < arregloUsers.length; i++ ){
        arregloUrls.push( arregloUsers[i].social[0].url )
    }

    return arregloUrls
}

console.log( extraerUrls( users ) )
*/

//CONDICIONALES 
/*
//if
if( condicionAEvaluar ){
    //Se van ejecutar las siguientes instrucciones
    //Instrucciones que se van a ejecutar SI Y SOLO SI la condicion es verdaera
}

// if... else
if( condicionAEvaluar ){
    //Instrucciones que se van a ejecutar SI Y SOLO SI la condicion es verdaera
}else{
    //Instrucciones que se ejecutan si la condicion es falsa
}
*/

/*
if( (5 < 10) && false ){
    console.log( "La condicion es cierta" )
}else{
    console.log( "La condicion es falsa" )
}
*/

//Una funcion que va a determinar si un numero es par o impar
/*
function numeroPar( numero ){
    if( (numero % 2) === 0 ){
        return "El numero " + numero + " es par"
    }else{
        return "El numero " + numero + " es impar" 
    }
}

console.log( numeroPar( 100 ) )
*/

/* 
    else if

    if( condicion1 ){
        //instrucciones si la condicion1 se cumple
    }else if( condicion2 ){
        //instrucciones que se llevan a cabo si la condicion1 NO se cumple, pero l
        //la condicion2 SÍ
    }else{
        //Se ejecuta si NINGUNA de las condiciones previas se cumplio
    }

*/

let usuarioEncontrado = false
let contrasenaCorrecta = false

if( usuarioEncontrado && contrasenaCorrecta ){
    console.log( "Inicio de sesion exitoso! Bienvenido" )
}else if( !usuarioEncontrado ){
    console.log( "Ups, tu usuario no existe" )
}else{
    console.log( "Ups, la contraseña es incorrecta" )
}