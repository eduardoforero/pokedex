import { Logo, DarkIcon, LightIcon } from './Icons';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <Logo />
            <div className="light-dark-switcher">
                <LightIcon />
                <label>
                    <input type="checkbox" className="light-dark-toggle" hidden />
                    <span className="light-dark-slider"></span>
                </label>
                <DarkIcon />
            </div>
        </nav>
    );
}

export default Nav;