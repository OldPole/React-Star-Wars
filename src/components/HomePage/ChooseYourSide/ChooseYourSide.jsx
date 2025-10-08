import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import styles from './ChooseYourSide.module.css';

const ChooseYourSide = () => {
    const { theme, change } = useTheme();

    return (
        <>
            {theme}
            <button onClick={() => change(THEME_LIGHT)}>light</button>
            <button onClick={() => change(THEME_DARK)}>dark</button>
            <button onClick={() => change(THEME_NEITRAL)}>neitral</button>
        </>
    )
}

export default ChooseYourSide;