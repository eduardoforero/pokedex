import { useState, useEffect } from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'

function usePokemon() {

    const [pokemon, setPokemon] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [seeMore, setSeeMore] = useState(true)

    const getPokemon = async (url = URL_DEFAULT) => {
        const response = await fetch(url)
        const pokemonList = await response.json()

        const { next, results } = pokemonList

        const newPokemon = await Promise.all(
            results.map(async (eachPokemon) => {

                const response = await fetch(eachPokemon.url)
                const pokemonData = await response.json()
    
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    image: pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.other.home.front_default || pokemonData.sprites.other['official-artwork'].front_default
                }
            })
        )

        return { next, newPokemon }

    }

    const fetchPokemon = async () => {
        const { next, newPokemon } = await getPokemon()

        setPokemon(newPokemon)
        setNextUrl(next)
    }

    const fetchMorePokemon = async () => {
        const { next, newPokemon } = await getPokemon(nextUrl)

        setPokemon(prevPokemon => [...prevPokemon, ...newPokemon])
        next === null ? setSeeMore(false) : setNextUrl(next)
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return { pokemon, fetchMorePokemon, seeMore }
}

export default usePokemon;