

/* METODOS HTTP

GET --> Consulta de informacion
POST --> Añadir nueva informacion
PUT --> Actualizar informacion existente
DELETE --> Elimina informacion existente

*/

/*
fetch( 'url', mensajePeticion )

fetch( 'urlPath' , {
    method: 'POST', //El nombre del metodo va en mayusculas
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        name: "Brenda Gonzalez",
        password: "123456",
        userName: "brenn123"
    })
})

fetch( 'url' ) //Se realiza una peticion de tipo GET a la url proporcionada
*/

/*
url/recursoQueMeInteresa

biblioteca/literatura --> Libros de literatura
biblioteca/ciencia_ficcion --> Libros de ciencia ficcion
*/

//API Application Programming Interface

const baseURL = "https://pokeapi.co/api/v2/pokemon"
const form = document.querySelector("#search-pokemon")
const loader = document.getElementById("loader")

document.addEventListener( "DOMContentLoaded", e => fetchData() )
form.addEventListener( "submit", e => buscarPokemon(e) )

function fetchData( nombre = "pikachu" ) {
    loader.classList.toggle( "oculto" )

    fetch( `${baseURL}/${nombre}` )
    .then( respuesta => respuesta.json() )
    .then( respuestaParseada => {
        console.log( respuestaParseada )
        mostrarPokemon( respuestaParseada )
    })
    .catch( error => {
        mostrarToast()
        console.error(error)
    })
}


function mostrarPokemon( pokemonData ){
    let pokemonWrapper = document.getElementById( "pokemon-wrapper" )
    let img = pokemonWrapper.querySelector("img")
    let name = pokemonWrapper.querySelector("h3")

    img.src = pokemonData.sprites.other.dream_world.front_default

    name.textContent = pokemonData.name

    setTimeout( () =>{
        loader.classList.toggle( "oculto" )
    }, 2000 )
}


function buscarPokemon( event ){
    let input = form.querySelector( "input" )
    let pokemonName = input.value.toLowerCase()

    fetchData( pokemonName )

    console.log( pokemonName )

    event.preventDefault()
}

function mostrarToast(){
    loader.classList.toggle( "oculto" )

    let toast = document.getElementById("toast")
    toast.classList.toggle( "oculto" ) //quita la clase

    setTimeout( () =>{
        toast.classList.toggle( "oculto" ) //añadir de nuevo la clase
    }, 5000 )
}