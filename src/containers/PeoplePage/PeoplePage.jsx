import { useState, useEffect } from 'react';
import { getApiResources } from '../../utils/network';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';
import PeopleList from '../../components/PeoplePage/PeopleList'

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
    const [people, setPeople] = useState(null);

    const getResources = async (url) => {
        const res = await getApiResources(url);

        const peoplePromises = res.results.map(async ({name, url}) => {
            const id = getPeopleId(url);
            const image = await getPeopleImg(id);

            return { id, name, image }
        });

        const peopleList = await Promise.all(peoplePromises);

        setPeople(peopleList);
    }

    useEffect(() => {
        getResources(API_PEOPLE);
    }, []);

    return (
        <>
            { people && <PeopleList people={people} />}
        </>
    )
}

export default PeoplePage;