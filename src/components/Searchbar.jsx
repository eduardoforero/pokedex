import { SearchIcon } from './Icons';
import './Searchbar.css';

function Searchbar() {
    return (
        <>
            <h3 className="title">Search for your favorite Pokémon</h3>
            <section className="searchbar">
                <input type="text" className="search-input" placeholder="Search for a Pokémon" />
                <button className="search-button">
                    <SearchIcon />
                </button>
            </section>
        </>
    )
}

export default Searchbar;