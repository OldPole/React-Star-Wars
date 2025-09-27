import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList'
import { getApiResources } from '@utils/network';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);

    const getResources = async (url) => {
        const res = await getApiResources(url);

        if (res) {
            const peoplePromises = res.results.map(async ({name, url}) => {
                const id = getPeopleId(url);
                const image = await getPeopleImg(id);

            return { id, name, image }
            });

            const peopleList = await Promise.all(peoplePromises);

            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResources(API_PEOPLE);
    }, []);

    return (
        <>
            <h1>Navigation</h1>
            { people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);