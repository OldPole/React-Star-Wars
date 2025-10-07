import { NavLink } from "react-router"

import Favorite from "@components/Favorite";

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
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