import './PokemonModal.css';
import PokemonStats from './PokemonStats';

function PokemonModal({ mostrar, pokemon, cerrar }) {
  return (
    <div className="modal-container" onClick={cerrar} style={{ display: mostrar ? 'grid' : 'none' }}>
      <section className="modal-body">
        <div className="modal-left-data">

          <figure>
            <img src={pokemon.image} alt={pokemon.name} className="image-details" />
          </figure>
          <section className="pokemon-type-section">
            {pokemon.types?.map((type, index) => <span key={index} className={`${type}`}>{type}</span>)}
          </section>

        </div>

        <div className="modal-right-data">

          <div className="pokemon-name">
            <h4> {pokemon.name}</h4>
            <span>N° {pokemon.id}</span>
          </div>

          <div className="pokemon-abilities">
            <h5>Abilities</h5>
            {pokemon.abilities?.map((ability, index) => <span key={index} className="pokemon-ability">{ability}</span>)}
          </div>

          <h5>Stats</h5>

          <section className="stats-container">
            <PokemonStats stats={pokemon.stats} />
          </section>

        </div>
      </section>
    </div>
  );
}

export default PokemonModal;