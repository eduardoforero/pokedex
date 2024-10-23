import styles from './PokemonModal.module.css';
import PokemonStats from './PokemonStats';

function PokemonModal({ mostrar, pokemon, cerrar }) {
  return (
    <div className={styles.modalContainer} onClick={cerrar} style={{ display: mostrar ? 'grid' : 'none' }}>
      <section className={styles.modalBody}>
        <div className={styles.modalLeftData}>

          <figure>
            <img src={pokemon.image} alt={pokemon.name} className={styles.imageDetails} />
          </figure>
          <section className={styles.pokemonTypeSection}>
            {pokemon.types?.map((type, index) => <span key={index} className={`${type}`}>{type}</span>)}
          </section>

        </div>

        <div className={styles.modalRightData}>

          <div className={styles.pokemonName}>
            <h4> {pokemon.name}</h4>
            <span>N° {pokemon.id}</span>
          </div>

          <div className={styles.pokemonAbilities}>
            <h5>Abilities</h5>
            {pokemon.abilities?.map((ability, index) => <span key={index} className={styles.pokemonAbility}>{ability}</span>)}
          </div>

          <h5>Stats</h5>

          <section className={styles.statsContainer}>
            <PokemonStats stats={pokemon.stats} />
          </section>

        </div>
      </section>
    </div>
  );
}

export default PokemonModal;