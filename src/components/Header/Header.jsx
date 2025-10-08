import { useEffect, useState } from "react";
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@context/ThemeProvider";
import { NavLink } from "react-router"

import Favorite from "@components/Favorite";

import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgStation from './img/space-station.svg';

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgDroid);

    const {theme} = useTheme();

    useEffect(() => {
        switch(theme) {
            case THEME_LIGHT: setIcon(imgLightsaber); break;
            case THEME_DARK: setIcon(imgStation); break;
            case THEME_NEITRAL: setIcon(imgDroid); break;
            default: setIcon(imgDroid);
        }
    }, [theme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Wars" />

            <ul className={styles.container__list}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/people/?page=1'}>People</NavLink></li>
                <li><NavLink to={'/not-found'}>Not Found</NavLink></li>
            </ul>

            <Favorite />
        </div>
    )
}

export default Header;