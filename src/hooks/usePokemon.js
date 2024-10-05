import { useState, useEffect } from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

function usePokemon() {

    const [pokemon, setPokemon] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [seeMore, setSeeMore] = useState(true)

    const fetchEachPokemon = async (url) => {

        const response = await fetch(url)
        const pokemonData = await response.json()

        const abilities = pokemonData.abilities.map(a => a.ability.name)
        const stats = pokemonData.stats.map(s => { return { name: s.stat.name, base: s.base_stat }})
        const types = pokemonData.types.map(t => t.type.name)

        return {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.other.home.front_default || pokemonData.sprites.other['official-artwork'].front_default,
            abilities,
            stats,
            types
        }
    }

    const getPokemon = async (url = URL_DEFAULT) => {
        const response = await fetch(url)
        const pokemonList = await response.json()

        const { next, results } = pokemonList

        const newPokemon = await Promise.all(
            results.map((eachPokemon) => fetchEachPokemon(eachPokemon.url))
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

    const searchingPokemon = async (search) => {
        const url = `${URL_ENDPOINT}${search.toLowerCase()}`
        return await fetchEachPokemon(url)

    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return { pokemon, fetchMorePokemon, seeMore, searchingPokemon }
}

export default usePokemon;