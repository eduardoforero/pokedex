import { Logo, DarkIcon, LightIcon } from './Icons';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <Logo />
            <div className="color-palette-switcher">
                <DarkIcon />
                <label>
                    <input type="checkbox" className="color-palette-toggle" hidden />
                    <span className="color-palette-slider"></span>
                </label>
                <LightIcon />
            </div>
        </nav>
    );
}

export default Nav;