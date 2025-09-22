import { useState, useEffect } from 'react';
import { getApiResources } from '../../utils/network';
import { API_ROOT, API_CHARACTERS } from '../../constants/api';

import styles from './CharactersPage.module.css';

const CharactersPage = () => {
    const [characters, setCharacters] = useState(null);

    const getResources = async (url) => {
        const res = await getApiResources(url);

        const charactersList = res.map(({id, name}) => {
            const url = API_ROOT + 'id/' + id + '.json';
            return {
                name,
                url
            }
        });

        console.log(charactersList);

        setCharacters(charactersList);
    }

    useEffect(() => {
        getResources(API_CHARACTERS);
    }, []);

    return (
        <>
            { characters && (
                <ul>
                    {characters.map(({ name, url }) => 
                        <li key={name}>{name}</li>
                    )}
                </ul>
            )}
        </>
    )
}

export default CharactersPage;