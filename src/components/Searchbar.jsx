import { SearchIcon } from './Icons';
import styles from './Searchbar.module.css';

function Searchbar({ search, setSearch, searchPokemon }) {
    return (
        <>
            <section className={styles.searchbar}>
                <h1 className={styles.title}>Find your favorite Pokémon <br />there are more than 1,000 of them</h1>
                <form className={styles.searchBarForm} onSubmit={searchPokemon}>
                    <fieldset>
                        <legend className={styles.visuallyHidden}>Search Pokémon</legend>
                        <label htmlFor={styles.searchInput} className={styles.visuallyHidden}>Search for a Pokémon</label>
                        <input type="text" id={styles.searchInput} className={styles.searchInput} placeholder="Search for a Pokémon by its ID or Name" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className={styles.searchButton}>
                            <SearchIcon />
                        </button>
                    </fieldset>
                </form>
            </section>

        </>
    )
}

export default Searchbar;