/*
const boton = document.querySelector("button")

//CONSULTAR DEL STORAGE
// storage.getItem("claveQueQuieroConsultar")

boton.addEventListener( "click", (event) => {
    let carrito = JSON.parse( localStorage.getItem("carrito"))
    //alert( carrito )
    console.log( carrito, typeof carrito )
})

const botonEliminar = document.querySelectorAll(".btn-delete")[0]

botonEliminar.addEventListener("click", (event) => {
    localStorage.removeItem("objeto")
})


const botonEliminarTodo = document.querySelectorAll(".btn-delete")[1]

botonEliminarTodo.addEventListener("click", event =>{
    localStorage.clear()
})
*/

/*
const jsonExample = {
    "clave" : "Valor",
    "name": "Brenda",
    "age" : 27,
    "mascotas": ["Juno", "Canelita"]
}
*/

const pokemones = {
    "results": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/"
      },
      {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/"
      },
      {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/"
      },
      {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/"
      },
      {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/"
      },
      {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/"
      },
      {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/"
      },
      {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
      },
      {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/"
      },
      {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/"
      }
    ]
}


const list = document.getElementById( "pokemons-list" )

window.addEventListener('DOMContentLoaded', (event) => {
   mostrarPokemones()
})


function mostrarPokemones() {  
    //console.log(pokemones.results)

    let fragmento = ``
    pokemones.results.map( elemento =>{
        fragmento += `
            <div class="pokemon-card">
                <h4>${ elemento.name }</h4>
                <small>${ elemento.url }</small>
            </div>
        ` 
    })

    list.innerHTML = fragmento
}

//forEach, map, filter, sort