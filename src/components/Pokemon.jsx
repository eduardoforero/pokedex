import { useState } from 'react';
import './Pokemon.css'
import usePokemon from '../hooks/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import PokemonModal from './PokemonModal';

function Pokemon() {

    const { pokemon, fetchMorePokemon, seeMore } = usePokemon();

    const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })
    const noVerPokemon = () => setMostrar({ mostrar: false, pokemon: {} })

    return (
        <>
            <PokemonModal {...mostrar} cerrar={noVerPokemon} />
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
                    {pokemon.map((eachPokemon) => <PokemonCard {...eachPokemon} key={eachPokemon.id} verPokemon={() => verPokemon(eachPokemon)} />)}
                </main>
            </InfiniteScroll>
        </>
    );
}

function PokemonCard({ id, name, image, verPokemon }) {
    return (
        <div className="pokemon-card" onClick={verPokemon}>
            <div className="pokemon-card-image-container">
                <img src={image} alt={name} className="pokemon-card-image" />
            </div>

            <div className="pokemon-card-header">
                <span>#{id}</span>
                <h3>{name}</h3>
            </div>

        </div>
    )
}

export default Pokemon;