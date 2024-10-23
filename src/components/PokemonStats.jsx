import styles from './PokemonStats.module.css';

function PokemonStats({ stats }) {
    return (
        <>
            {stats?.map((stat, index) => <div key={index} className={styles.pokemonStat}>
                <div className={styles.statLabel}> {stat.name} </div>
                <div className={styles.barContainer}>
                    <div className={styles.bar} style={{ flexBasis: `${stat.base}%` }} ></div>
                </div>
            </div>
            )}
        </>
    );
}

export default PokemonStats;