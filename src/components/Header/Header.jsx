import { NavLink } from "react-router"

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.container__list}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/people/?page=1'}>People</NavLink></li>
                <li><NavLink to={'/not-found'}>Not Found</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;