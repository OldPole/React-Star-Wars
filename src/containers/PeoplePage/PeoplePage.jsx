import { useState, useEffect } from 'react';
import { getApiResources } from '../../utils/network';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
    const [people, setPeople] = useState(null);

    const getResources = async (url) => {
        const res = await getApiResources(url);

        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url);
            const image = getPeopleImg(id);
            console.log(image);
            return {
                id,
                name,
                url
            }
        });

        console.log(peopleList);

        setPeople(peopleList);
    }

    useEffect(() => {
        getResources(API_PEOPLE);
    }, []);

    return (
        <>
            { people && (
                <ul>
                    {people.map(({ name, url }) => 
                        <li key={name}>{name}</li>
                    )}
                </ul>
            )}
        </>
    )
}

export default PeoplePage;