import { SearchIcon } from './Icons';
import './Searchbar.css';

function Searchbar({ search, setSearch, searchPokemon }) {
    return (
        <>
            <section className="searchbar">
                <h1 className="title">Find your favorite Pokémon <br />there are more than 1,000 of them</h1>
                <form className="searchbar-form" onSubmit={searchPokemon}>
                    <fieldset>
                        <legend className="visually-hidden">Search Pokémon</legend>
                        <label htmlFor="search-input" className="visually-hidden">Search for a Pokémon</label>
                        <input type="text" id="search-input" className="search-input" placeholder="Search for a Pokémon by its ID or Name" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="search-button">
                            <SearchIcon />
                        </button>
                    </fieldset>
                </form>
            </section>

        </>
    )
}

export default Searchbar;