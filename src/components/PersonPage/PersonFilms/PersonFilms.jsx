import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeCurrentRequest } from '@utils/network';

import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
    const [filmsInfo, setFilmsInfo] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await makeCurrentRequest(personFilms);
            
            setFilmsInfo(response);
        })()
    }, [])

    return (
        <div className={styles.wrapper}>
            <ul className={styles.container__list}>
                {filmsInfo
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({title, episode_id}) => 
                     <li className={styles.list__item} key={episode_id}>
                        <span className={styles.item__episode}>Episode {episode_id}</span>
                        <span className={styles.item__colon}> : </span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array,
}

export default PersonFilms;