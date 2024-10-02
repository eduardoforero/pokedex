import usePokemon from '../hooks/usePokemon';
import './Pokemon.css'

function Pokemon() {

    const { pokemon, fetchMorePokemon } = usePokemon();

    return (
        <section className="pokemon-card-container">
            {
                pokemon.map((eachPokemon, index) => (
                    <PokemonCard key={index} {...eachPokemon} index={index} />
                ))
            }

            <button className="load-more-button" onClick={fetchMorePokemon}>Load More Pokemon</button>
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