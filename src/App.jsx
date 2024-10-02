import { useState, useEffect } from 'react'

function App() {

  const [pokemon, setPokemon] = useState([

  ])

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const pokemonList = await response.json()

      const { results } = pokemonList

      const newPokemon = results.map(async (eachPokemon) => {

        const response = await fetch(eachPokemon.url)
        const pokemonData = await response.json()

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.other.dream_world.front_default
        }

      })

      setPokemon(await Promise.all(newPokemon))

    }

    getPokemon()

  }, [])

  return (
    <div className="App">
      <h1>Mi Pokedex con React</h1>

      <main className="container">
      {
          pokemon.map((eachPokemon, index) => (
            <div key={index} className="pokemonCard">
              <img src={eachPokemon.image} alt={eachPokemon.name} />
              <span>{eachPokemon.id}</span>
              <h3>{eachPokemon.name}</h3>
            </div>
          ))
        }
      </main>
      <ul>
        
      </ul>
    </div>
  )

}

export default App
