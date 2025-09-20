import { useState, useEffect } from 'react';
import { getApiResources } from '../../utils/network';
import { API_CHARACTERS } from '../../constants/api';

import styles from './CharactersPage.module.css';

const CharactersPage = () => {
    const [characters, setCharacters] = useState(null);

    const getResources = async (url) => {
        const res = await getApiResources(url);
        console.log(res);
        const charactersList = res.results.map(({name, url}) => {
            return {
                name,
                url
            }
        });

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