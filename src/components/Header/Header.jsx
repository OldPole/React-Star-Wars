import { NavLink } from "react-router"

import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.container}>
            <ul className={style.container__list}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/people'}>People</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;