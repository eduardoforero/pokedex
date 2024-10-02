import { SearchIcon } from './Icons';
import './Searchbar.css';

function Searchbar() {
    return (
        <>
        <section className="searchbar">
        <h1 className="title">Search for your favorite Pokémon</h1>
            <form className="searchbar-form">
                <fieldset>
                    <legend className="visually-hidden">Search Pokémon</legend>
                    <label htmlFor="search-input" className="visually-hidden">Search for a Pokémon</label>
                    <input type="text" id="search-input" className="search-input" placeholder="Search for a Pokémon" />
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