import './PokemonModal.css';

function PokemonModal({ mostrar, pokemon, cerrar }) {
  return (
    <div className="modal-container" onClick={cerrar} style={{ display: mostrar ? 'grid' : 'none' }}>
      <section className="modal-body">
        <div className="imagen-container">
            <img src={pokemon.image} alt={pokemon.name} className="imagen-detalle" />
        </div>
        <div className="data">

        </div>
      </section>
    </div>
  );
}

export default PokemonModal;