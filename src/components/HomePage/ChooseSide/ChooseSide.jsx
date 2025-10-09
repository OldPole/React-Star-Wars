import ChooseSideItem from "@components/HomePage/ChooseSideItem";
import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@context/ThemeProvider";

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: imgLightSide,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: imgDarkSide,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEITRAL,
            text: "I'm Han Solo",
            img: imgFalcon,
            classes: styles.item__neitral,
        },
    ]

    return (
        <div className={styles.container}> 
            {elements.map(({ theme, text, img, classes }, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;