import { useState, useEffect } from 'react';
import { Logo, DarkIcon, LightIcon } from './Icons';
import styles from './Nav.module.css';

const Nav = () => {

    const [theme, setTheme] = useState('light');

    const handleTheme = (e) => setTheme(e.target.checked ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <nav>
            <Logo />
            <div className={styles.lightDarkSwitcher}>
                <LightIcon />
                <label>
                    <input type="checkbox" className={styles.lightDarkToggle} onChange={handleTheme} hidden />
                    <span className={styles.lightDarkSlider}></span>
                </label>
                <DarkIcon />
            </div>
        </nav>
    );
}

export default Nav;