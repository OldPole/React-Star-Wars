import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResources } from '@utils/network';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';
import { useQueryParams } from '@hooks/useQueryParams';

import styles from './PeoplePage.module.css';
import { getPeoplePageId } from '../../services/getPeopleData';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [curPage, setCurPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

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
            setNextPage(res.next);
            setPrevPage(res.previous);
            setCurPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResources(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResources={getResources}
                nextPage={nextPage}
                prevPage={prevPage}
                curPage={curPage}
            />
            { people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);