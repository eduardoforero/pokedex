import './PokemonStats.css';

function PokemonStats({ stats }) {
    return (
        <>
            {stats?.map((stat, index) => <div key={index} className="pokemon-stat">
                <div className="stat-label"> {stat.name} </div>
                <div className="bar-container">
                    <div className="bar" style={{ flexBasis: `${stat.base}%` }} ></div>
                </div>
            </div>
            )}
        </>
    );
}

export default PokemonStats;