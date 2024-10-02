import { useState, useEffect } from 'react'
import './Pokemon.css'

function Pokemon() {

    const [pokemon, setPokemon] = useState([

    ])

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
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
        <section className="pokemon-card-container">
            {
                pokemon.map((eachPokemon, index) => (
                    <PokemonCard key={index} {...eachPokemon} index={index} />
                ))
            }
        </section>
    );
}

function PokemonCard({ id, name, image, index }) {
    return (
        <div key={index} className="pokemon-card">

            <img src={image} alt={name} className="pokemon-card-image" />
            <div className="pokemon-card-header">
                <span>#{id}</span>
                <h3>{name}</h3>
            </div>

        </div>
    )
}

export default Pokemon;