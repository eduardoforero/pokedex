import usePokemon from '../hooks/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import './Pokemon.css'

function Pokemon() {

    const { pokemon, fetchMorePokemon, seeMore } = usePokemon();

    return (
        <InfiniteScroll
            dataLength={pokemon.length}
            next={fetchMorePokemon}
            hasMore={seeMore}
            loader={<Loading />}
            endMessage={
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#3088f021' }}>
                    <p>
                        <br /><b>That's all, there are no more Pokémon to show</b><br /><br />
                    </p>
                </div>
            }
        >
            <main className="pokemon-cards-container">
            {
                pokemon.map((eachPokemon, index) => (
                    <PokemonCard key={index} {...eachPokemon} index={index} />
                ))
            }
            </main>
        </InfiniteScroll>
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