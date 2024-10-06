import { useState, useEffect } from 'react';
import { Logo, DarkIcon, LightIcon } from './Icons';
import './Nav.css';

const Nav = () => {

    const [theme, setTheme] = useState('light');

    const handleTheme = (e) => setTheme(e.target.checked ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <nav>
            <Logo />
            <div className="light-dark-switcher">
                <LightIcon />
                <label>
                    <input type="checkbox" className="light-dark-toggle" onChange={handleTheme} hidden />
                    <span className="light-dark-slider"></span>
                </label>
                <DarkIcon />
            </div>
        </nav>
    );
}

export default Nav;